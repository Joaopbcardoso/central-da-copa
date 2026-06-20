export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { scores, knockoutScores, teams, roundNames } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Gemini API Key não configurada no servidor.' });
    }

    const systemInstruction = `Você é um comentarista esportivo irreverente, divertido e especialista em Copas do Mundo, analisando os resultados (reais ou simulados) da Copa de 2026.
Seu objetivo é ler os placares e gerar uma resenha curta (max 3 parágrafos) destacando zebras, melhores ataques, piores defesas e confrontos interessantes que se formaram.
Formate a resposta em Markdown, use emojis e seja vibrante.`;

    const promptText = `
Estado Atual da Copa 2026:
Placares da Fase de Grupos (ID_JOGO: CASA x FORA):
${JSON.stringify(scores)}

Placares do Mata-Mata:
${JSON.stringify(knockoutScores)}

Times e Siglas:
${JSON.stringify(teams)}

Faça uma análise inteligente desses resultados!`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemInstruction }]
        },
        contents: [
          {
            role: 'user',
            parts: [{ text: promptText }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API Error:', data);
      return res.status(500).json({ error: 'Erro ao se comunicar com a IA.' });
    }

    const analysis = data.candidates[0].content.parts[0].text;

    return res.status(200).json({ text: analysis });

  } catch (error) {
    console.error('API Handler Error:', error);
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
}
