import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// ============================================================
//  CENTRAL DA COPA DO MUNDO 2026
//  Dados • Lógica • Renderização • Simulação • Supabase
// ============================================================

// ============================
//  TEAMS DATA
// ============================
const TEAMS = {
  MEX: { name: 'México', iso: 'mx' },
  RSA: { name: 'África do Sul', iso: 'za' },
  KOR: { name: 'Coreia do Sul', iso: 'kr' },
  CZE: { name: 'Rep. Tcheca', iso: 'cz' },
  CAN: { name: 'Canadá', iso: 'ca' },
  BIH: { name: 'Bósnia', iso: 'ba' },
  QAT: { name: 'Catar', iso: 'qa' },
  SUI: { name: 'Suíça', iso: 'ch' },
  BRA: { name: 'Brasil', iso: 'br' },
  MAR: { name: 'Marrocos', iso: 'ma' },
  HAI: { name: 'Haiti', iso: 'ht' },
  SCO: { name: 'Escócia', iso: 'gb-sct' },
  USA: { name: 'EUA', iso: 'us' },
  PAR: { name: 'Paraguai', iso: 'py' },
  AUS: { name: 'Austrália', iso: 'au' },
  TUR: { name: 'Turquia', iso: 'tr' },
  GER: { name: 'Alemanha', iso: 'de' },
  CUW: { name: 'Curaçao', iso: 'cw' },
  CIV: { name: 'Costa do Marfim', iso: 'ci' },
  ECU: { name: 'Equador', iso: 'ec' },
  NED: { name: 'Holanda', iso: 'nl' },
  JPN: { name: 'Japão', iso: 'jp' },
  SWE: { name: 'Suécia', iso: 'se' },
  TUN: { name: 'Tunísia', iso: 'tn' },
  BEL: { name: 'Bélgica', iso: 'be' },
  EGY: { name: 'Egito', iso: 'eg' },
  IRN: { name: 'Irã', iso: 'ir' },
  NZL: { name: 'Nova Zelândia', iso: 'nz' },
  ESP: { name: 'Espanha', iso: 'es' },
  CPV: { name: 'Cabo Verde', iso: 'cv' },
  KSA: { name: 'Arábia Saudita', iso: 'sa' },
  URU: { name: 'Uruguai', iso: 'uy' },
  FRA: { name: 'França', iso: 'fr' },
  SEN: { name: 'Senegal', iso: 'sn' },
  IRQ: { name: 'Iraque', iso: 'iq' },
  NOR: { name: 'Noruega', iso: 'no' },
  ARG: { name: 'Argentina', iso: 'ar' },
  ALG: { name: 'Argélia', iso: 'dz' },
  AUT: { name: 'Áustria', iso: 'at' },
  JOR: { name: 'Jordânia', iso: 'jo' },
  POR: { name: 'Portugal', iso: 'pt' },
  COD: { name: 'RD Congo', iso: 'cd' },
  UZB: { name: 'Uzbequistão', iso: 'uz' },
  COL: { name: 'Colômbia', iso: 'co' },
  ENG: { name: 'Inglaterra', iso: 'gb-eng' },
  CRO: { name: 'Croácia', iso: 'hr' },
  GHA: { name: 'Gana', iso: 'gh' },
  PAN: { name: 'Panamá', iso: 'pa' },
};

// Gera a tag <img> da bandeira usando flagcdn.com (API gratuita)
function getFlag(teamCode) {
  const team = TEAMS[teamCode];
  if (!team) return '';
  return `<img src="https://flagcdn.com/w80/${team.iso}.png" alt="${team.name}" class="flag-img" loading="lazy" onerror="this.style.display='none'">`;
}

// ============================
//  GROUPS
// ============================
const GROUPS = {
  A: ['MEX', 'RSA', 'KOR', 'CZE'],
  B: ['CAN', 'BIH', 'QAT', 'SUI'],
  C: ['BRA', 'MAR', 'HAI', 'SCO'],
  D: ['USA', 'PAR', 'AUS', 'TUR'],
  E: ['GER', 'CUW', 'CIV', 'ECU'],
  F: ['NED', 'JPN', 'SWE', 'TUN'],
  G: ['BEL', 'EGY', 'IRN', 'NZL'],
  H: ['ESP', 'CPV', 'KSA', 'URU'],
  I: ['FRA', 'SEN', 'IRQ', 'NOR'],
  J: ['ARG', 'ALG', 'AUT', 'JOR'],
  K: ['POR', 'COD', 'UZB', 'COL'],
  L: ['ENG', 'CRO', 'GHA', 'PAN'],
};

// ============================
//  GROUP MATCHES (72 games)
//  Horários de Brasília
// ============================
const GROUP_MATCHES = [
  // === GRUPO A ===
  { id: 'A1', group: 'A', home: 'MEX', away: 'RSA', date: '2026-06-11', time: '16:00', round: 1 },
  { id: 'A2', group: 'A', home: 'KOR', away: 'CZE', date: '2026-06-11', time: '23:00', round: 1 },
  { id: 'A3', group: 'A', home: 'CZE', away: 'RSA', date: '2026-06-18', time: '13:00', round: 2 },
  { id: 'A4', group: 'A', home: 'MEX', away: 'KOR', date: '2026-06-18', time: '22:00', round: 2 },
  { id: 'A5', group: 'A', home: 'CZE', away: 'MEX', date: '2026-06-24', time: '22:00', round: 3 },
  { id: 'A6', group: 'A', home: 'RSA', away: 'KOR', date: '2026-06-24', time: '22:00', round: 3 },

  // === GRUPO B ===
  { id: 'B1', group: 'B', home: 'CAN', away: 'BIH', date: '2026-06-12', time: '16:00', round: 1 },
  { id: 'B2', group: 'B', home: 'QAT', away: 'SUI', date: '2026-06-13', time: '16:00', round: 1 },
  { id: 'B3', group: 'B', home: 'CAN', away: 'QAT', date: '2026-06-19', time: '16:00', round: 2 },
  { id: 'B4', group: 'B', home: 'SUI', away: 'BIH', date: '2026-06-19', time: '19:00', round: 2 },
  { id: 'B5', group: 'B', home: 'SUI', away: 'CAN', date: '2026-06-25', time: '16:00', round: 3 },
  { id: 'B6', group: 'B', home: 'BIH', away: 'QAT', date: '2026-06-25', time: '16:00', round: 3 },

  // === GRUPO C ===
  { id: 'C1', group: 'C', home: 'BRA', away: 'MAR', date: '2026-06-13', time: '19:00', round: 1 },
  { id: 'C2', group: 'C', home: 'HAI', away: 'SCO', date: '2026-06-13', time: '22:00', round: 1 },
  { id: 'C3', group: 'C', home: 'BRA', away: 'HAI', date: '2026-06-19', time: '22:00', round: 2 },
  { id: 'C4', group: 'C', home: 'SCO', away: 'MAR', date: '2026-06-20', time: '16:00', round: 2 },
  { id: 'C5', group: 'C', home: 'SCO', away: 'BRA', date: '2026-06-24', time: '19:00', round: 3 },
  { id: 'C6', group: 'C', home: 'MAR', away: 'HAI', date: '2026-06-24', time: '19:00', round: 3 },

  // === GRUPO D ===
  { id: 'D1', group: 'D', home: 'USA', away: 'PAR', date: '2026-06-12', time: '22:00', round: 1 },
  { id: 'D2', group: 'D', home: 'AUS', away: 'TUR', date: '2026-06-14', time: '01:00', round: 1 },
  { id: 'D3', group: 'D', home: 'USA', away: 'AUS', date: '2026-06-19', time: '01:00', round: 2 },
  { id: 'D4', group: 'D', home: 'TUR', away: 'PAR', date: '2026-06-20', time: '13:00', round: 2 },
  { id: 'D5', group: 'D', home: 'TUR', away: 'USA', date: '2026-06-25', time: '22:00', round: 3 },
  { id: 'D6', group: 'D', home: 'PAR', away: 'AUS', date: '2026-06-25', time: '22:00', round: 3 },

  // === GRUPO E ===
  { id: 'E1', group: 'E', home: 'GER', away: 'CUW', date: '2026-06-14', time: '14:00', round: 1 },
  { id: 'E2', group: 'E', home: 'CIV', away: 'ECU', date: '2026-06-14', time: '20:00', round: 1 },
  { id: 'E3', group: 'E', home: 'GER', away: 'CIV', date: '2026-06-20', time: '14:00', round: 2 },
  { id: 'E4', group: 'E', home: 'ECU', away: 'CUW', date: '2026-06-20', time: '20:00', round: 2 },
  { id: 'E5', group: 'E', home: 'ECU', away: 'GER', date: '2026-06-25', time: '19:00', round: 3 },
  { id: 'E6', group: 'E', home: 'CUW', away: 'CIV', date: '2026-06-25', time: '19:00', round: 3 },

  // === GRUPO F ===
  { id: 'F1', group: 'F', home: 'NED', away: 'JPN', date: '2026-06-14', time: '17:00', round: 1 },
  { id: 'F2', group: 'F', home: 'SWE', away: 'TUN', date: '2026-06-14', time: '23:00', round: 1 },
  { id: 'F3', group: 'F', home: 'NED', away: 'SWE', date: '2026-06-20', time: '17:00', round: 2 },
  { id: 'F4', group: 'F', home: 'TUN', away: 'JPN', date: '2026-06-20', time: '23:00', round: 2 },
  { id: 'F5', group: 'F', home: 'TUN', away: 'NED', date: '2026-06-26', time: '16:00', round: 3 },
  { id: 'F6', group: 'F', home: 'JPN', away: 'SWE', date: '2026-06-26', time: '16:00', round: 3 },

  // === GRUPO G ===
  { id: 'G1', group: 'G', home: 'BEL', away: 'EGY', date: '2026-06-15', time: '16:00', round: 1 },
  { id: 'G2', group: 'G', home: 'IRN', away: 'NZL', date: '2026-06-15', time: '22:00', round: 1 },
  { id: 'G3', group: 'G', home: 'BEL', away: 'IRN', date: '2026-06-21', time: '16:00', round: 2 },
  { id: 'G4', group: 'G', home: 'NZL', away: 'EGY', date: '2026-06-21', time: '19:00', round: 2 },
  { id: 'G5', group: 'G', home: 'NZL', away: 'BEL', date: '2026-06-26', time: '19:00', round: 3 },
  { id: 'G6', group: 'G', home: 'EGY', away: 'IRN', date: '2026-06-26', time: '19:00', round: 3 },

  // === GRUPO H ===
  { id: 'H1', group: 'H', home: 'ESP', away: 'CPV', date: '2026-06-15', time: '13:00', round: 1 },
  { id: 'H2', group: 'H', home: 'KSA', away: 'URU', date: '2026-06-15', time: '19:00', round: 1 },
  { id: 'H3', group: 'H', home: 'ESP', away: 'KSA', date: '2026-06-21', time: '13:00', round: 2 },
  { id: 'H4', group: 'H', home: 'URU', away: 'CPV', date: '2026-06-21', time: '22:00', round: 2 },
  { id: 'H5', group: 'H', home: 'URU', away: 'ESP', date: '2026-06-26', time: '22:00', round: 3 },
  { id: 'H6', group: 'H', home: 'CPV', away: 'KSA', date: '2026-06-26', time: '22:00', round: 3 },

  // === GRUPO I ===
  { id: 'I1', group: 'I', home: 'FRA', away: 'SEN', date: '2026-06-16', time: '16:00', round: 1 },
  { id: 'I2', group: 'I', home: 'IRQ', away: 'NOR', date: '2026-06-16', time: '19:00', round: 1 },
  { id: 'I3', group: 'I', home: 'FRA', away: 'IRQ', date: '2026-06-22', time: '16:00', round: 2 },
  { id: 'I4', group: 'I', home: 'NOR', away: 'SEN', date: '2026-06-22', time: '19:00', round: 2 },
  { id: 'I5', group: 'I', home: 'NOR', away: 'FRA', date: '2026-06-27', time: '16:00', round: 3 },
  { id: 'I6', group: 'I', home: 'SEN', away: 'IRQ', date: '2026-06-27', time: '16:00', round: 3 },

  // === GRUPO J ===
  { id: 'J1', group: 'J', home: 'ARG', away: 'ALG', date: '2026-06-16', time: '22:00', round: 1 },
  { id: 'J2', group: 'J', home: 'AUT', away: 'JOR', date: '2026-06-17', time: '01:00', round: 1 },
  { id: 'J3', group: 'J', home: 'ARG', away: 'AUT', date: '2026-06-22', time: '22:00', round: 2 },
  { id: 'J4', group: 'J', home: 'JOR', away: 'ALG', date: '2026-06-23', time: '01:00', round: 2 },
  { id: 'J5', group: 'J', home: 'JOR', away: 'ARG', date: '2026-06-27', time: '19:00', round: 3 },
  { id: 'J6', group: 'J', home: 'ALG', away: 'AUT', date: '2026-06-27', time: '19:00', round: 3 },

  // === GRUPO K ===
  { id: 'K1', group: 'K', home: 'POR', away: 'COD', date: '2026-06-17', time: '14:00', round: 1 },
  { id: 'K2', group: 'K', home: 'UZB', away: 'COL', date: '2026-06-17', time: '17:00', round: 1 },
  { id: 'K3', group: 'K', home: 'POR', away: 'UZB', date: '2026-06-23', time: '14:00', round: 2 },
  { id: 'K4', group: 'K', home: 'COL', away: 'COD', date: '2026-06-23', time: '17:00', round: 2 },
  { id: 'K5', group: 'K', home: 'COL', away: 'POR', date: '2026-06-27', time: '22:00', round: 3 },
  { id: 'K6', group: 'K', home: 'COD', away: 'UZB', date: '2026-06-27', time: '22:00', round: 3 },

  // === GRUPO L ===
  { id: 'L1', group: 'L', home: 'ENG', away: 'CRO', date: '2026-06-17', time: '20:00', round: 1 },
  { id: 'L2', group: 'L', home: 'GHA', away: 'PAN', date: '2026-06-17', time: '23:00', round: 1 },
  { id: 'L3', group: 'L', home: 'ENG', away: 'GHA', date: '2026-06-23', time: '20:00', round: 2 },
  { id: 'L4', group: 'L', home: 'PAN', away: 'CRO', date: '2026-06-23', time: '23:00', round: 2 },
  { id: 'L5', group: 'L', home: 'PAN', away: 'ENG', date: '2026-06-28', time: '19:00', round: 3 },
  { id: 'L6', group: 'L', home: 'CRO', away: 'GHA', date: '2026-06-28', time: '19:00', round: 3 },
];

// ============================
//  KNOCKOUT BRACKET STRUCTURE
//  R32 → R16 → QF → SF → F
// ============================
// Cada jogo do mata-mata tem: de onde vêm os times (grupo ou jogo anterior)
const KNOCKOUT_MATCHES = [
  // --- 32-avos (Round of 32) - 16 jogos ---
  { id: 'R32_1',  round: 'R32', label: '32-avos #1',  homeFrom: { type: 'group', pos: 2, group: 'A' }, awayFrom: { type: 'group', pos: 2, group: 'B' } },
  { id: 'R32_2',  round: 'R32', label: '32-avos #2',  homeFrom: { type: 'group', pos: 1, group: 'C' }, awayFrom: { type: 'group', pos: 2, group: 'F' } },
  { id: 'R32_3',  round: 'R32', label: '32-avos #3',  homeFrom: { type: 'group', pos: 1, group: 'E' }, awayFrom: { type: '3rd', possibleGroups: ['A','B','C','D','F'] } },
  { id: 'R32_4',  round: 'R32', label: '32-avos #4',  homeFrom: { type: 'group', pos: 1, group: 'F' }, awayFrom: { type: 'group', pos: 2, group: 'C' } },
  { id: 'R32_5',  round: 'R32', label: '32-avos #5',  homeFrom: { type: 'group', pos: 2, group: 'E' }, awayFrom: { type: 'group', pos: 2, group: 'I' } },
  { id: 'R32_6',  round: 'R32', label: '32-avos #6',  homeFrom: { type: 'group', pos: 1, group: 'I' }, awayFrom: { type: '3rd', possibleGroups: ['C','D','F','G','H'] } },
  { id: 'R32_7',  round: 'R32', label: '32-avos #7',  homeFrom: { type: 'group', pos: 1, group: 'A' }, awayFrom: { type: '3rd', possibleGroups: ['C','E','F','H','I'] } },
  { id: 'R32_8',  round: 'R32', label: '32-avos #8',  homeFrom: { type: 'group', pos: 1, group: 'L' }, awayFrom: { type: '3rd', possibleGroups: ['E','H','I','J','K'] } },
  { id: 'R32_9',  round: 'R32', label: '32-avos #9',  homeFrom: { type: 'group', pos: 1, group: 'G' }, awayFrom: { type: '3rd', possibleGroups: ['A','E','H','I','J'] } },
  { id: 'R32_10', round: 'R32', label: '32-avos #10', homeFrom: { type: 'group', pos: 1, group: 'D' }, awayFrom: { type: '3rd', possibleGroups: ['B','E','F','I','J'] } },
  { id: 'R32_11', round: 'R32', label: '32-avos #11', homeFrom: { type: 'group', pos: 1, group: 'H' }, awayFrom: { type: 'group', pos: 2, group: 'J' } },
  { id: 'R32_12', round: 'R32', label: '32-avos #12', homeFrom: { type: 'group', pos: 2, group: 'K' }, awayFrom: { type: 'group', pos: 2, group: 'L' } },
  { id: 'R32_13', round: 'R32', label: '32-avos #13', homeFrom: { type: 'group', pos: 1, group: 'B' }, awayFrom: { type: '3rd', possibleGroups: ['E','F','G','I','J'] } },
  { id: 'R32_14', round: 'R32', label: '32-avos #14', homeFrom: { type: 'group', pos: 2, group: 'D' }, awayFrom: { type: 'group', pos: 2, group: 'G' } },
  { id: 'R32_15', round: 'R32', label: '32-avos #15', homeFrom: { type: 'group', pos: 1, group: 'J' }, awayFrom: { type: 'group', pos: 2, group: 'H' } },
  { id: 'R32_16', round: 'R32', label: '32-avos #16', homeFrom: { type: 'group', pos: 1, group: 'K' }, awayFrom: { type: '3rd', possibleGroups: ['D','E','I','J','L'] } },

  // --- Oitavas (R16) - 8 jogos ---
  { id: 'R16_1', round: 'R16', label: 'Oitavas #1', homeFrom: { type: 'winner', matchId: 'R32_1' }, awayFrom: { type: 'winner', matchId: 'R32_2' } },
  { id: 'R16_2', round: 'R16', label: 'Oitavas #2', homeFrom: { type: 'winner', matchId: 'R32_3' }, awayFrom: { type: 'winner', matchId: 'R32_4' } },
  { id: 'R16_3', round: 'R16', label: 'Oitavas #3', homeFrom: { type: 'winner', matchId: 'R32_5' }, awayFrom: { type: 'winner', matchId: 'R32_6' } },
  { id: 'R16_4', round: 'R16', label: 'Oitavas #4', homeFrom: { type: 'winner', matchId: 'R32_7' }, awayFrom: { type: 'winner', matchId: 'R32_8' } },
  { id: 'R16_5', round: 'R16', label: 'Oitavas #5', homeFrom: { type: 'winner', matchId: 'R32_9' }, awayFrom: { type: 'winner', matchId: 'R32_10' } },
  { id: 'R16_6', round: 'R16', label: 'Oitavas #6', homeFrom: { type: 'winner', matchId: 'R32_11' }, awayFrom: { type: 'winner', matchId: 'R32_12' } },
  { id: 'R16_7', round: 'R16', label: 'Oitavas #7', homeFrom: { type: 'winner', matchId: 'R32_13' }, awayFrom: { type: 'winner', matchId: 'R32_14' } },
  { id: 'R16_8', round: 'R16', label: 'Oitavas #8', homeFrom: { type: 'winner', matchId: 'R32_15' }, awayFrom: { type: 'winner', matchId: 'R32_16' } },

  // --- Quartas (QF) - 4 jogos ---
  { id: 'QF_1', round: 'QF', label: 'Quartas #1', homeFrom: { type: 'winner', matchId: 'R16_1' }, awayFrom: { type: 'winner', matchId: 'R16_2' } },
  { id: 'QF_2', round: 'QF', label: 'Quartas #2', homeFrom: { type: 'winner', matchId: 'R16_3' }, awayFrom: { type: 'winner', matchId: 'R16_4' } },
  { id: 'QF_3', round: 'QF', label: 'Quartas #3', homeFrom: { type: 'winner', matchId: 'R16_5' }, awayFrom: { type: 'winner', matchId: 'R16_6' } },
  { id: 'QF_4', round: 'QF', label: 'Quartas #4', homeFrom: { type: 'winner', matchId: 'R16_7' }, awayFrom: { type: 'winner', matchId: 'R16_8' } },

  // --- Semifinais (SF) - 2 jogos ---
  { id: 'SF_1', round: 'SF', label: 'Semi #1', homeFrom: { type: 'winner', matchId: 'QF_1' }, awayFrom: { type: 'winner', matchId: 'QF_2' } },
  { id: 'SF_2', round: 'SF', label: 'Semi #2', homeFrom: { type: 'winner', matchId: 'QF_3' }, awayFrom: { type: 'winner', matchId: 'QF_4' } },

  // --- 3º Lugar ---
  { id: '3RD', round: '3RD', label: 'Disputa 3º Lugar', homeFrom: { type: 'loser', matchId: 'SF_1' }, awayFrom: { type: 'loser', matchId: 'SF_2' } },

  // --- Final ---
  { id: 'FINAL', round: 'FINAL', label: 'Final', homeFrom: { type: 'winner', matchId: 'SF_1' }, awayFrom: { type: 'winner', matchId: 'SF_2' } },
];

const ROUND_NAMES = {
  R32: '32-avos de Final',
  R16: 'Oitavas de Final',
  QF: 'Quartas de Final',
  SF: 'Semifinais',
  '3RD': 'Disputa de 3º Lugar',
  FINAL: 'Final',
};

// ============================
//  STATE
// ============================
let state = {
  scores: {},          // matchId -> { home: number, away: number }
  knockoutScores: {},  // matchId -> { home: number, away: number }
  simulationMode: false,
  simScores: {},       // simulação: matchId -> { home, away }
  simKnockoutScores: {},
  activeTab: 'groups',
  isAdmin: false,      // Controle de edição
};

// ============================
//  STORAGE (Supabase Backend)
// ============================
let saveTimeout = null;

async function saveState() {
  if (state.simulationMode || !state.isAdmin) return; 

  const data = {
    scores: state.scores,
    knockoutScores: state.knockoutScores,
  };

  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    try {
      const { error } = await supabase
        .from('app_state')
        .upsert({ id: 1, data: data });
        
      if (error) throw error;
    } catch (e) {
      console.error('Erro ao salvar no banco:', e);
      showToast('❌ Erro de conexão ao salvar');
    }
  }, 500);
}

async function loadState() {
  try {
    const { data, error } = await supabase
      .from('app_state')
      .select('data')
      .eq('id', 1)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    if (data && data.data) {
      state.scores = data.data.scores || {};
      state.knockoutScores = data.data.knockoutScores || {};
    }
  } catch (e) {
    console.error('Erro ao carregar do banco:', e);
    showToast('⚠️ Banco de dados offline.');
  }
}

// ============================
//  UTILITY
// ============================
function getScores() {
  return state.simulationMode ? state.simScores : state.scores;
}

function getKnockoutScores() {
  return state.simulationMode ? state.simKnockoutScores : state.knockoutScores;
}

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}`;
}

function isToday(dateStr) {
  const today = new Date();
  const [y, m, d] = dateStr.split('-').map(Number);
  return today.getFullYear() === y && today.getMonth() + 1 === m && today.getDate() === d;
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ============================
//  GROUP STANDINGS CALCULATION
// ============================
function calculateGroupStandings(groupId) {
  const teams = GROUPS[groupId];
  const scores = getScores();
  const matches = GROUP_MATCHES.filter(m => m.group === groupId);

  const stats = {};
  teams.forEach(t => {
    stats[t] = { team: t, pts: 0, pld: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0 };
  });

  // Head-to-head records
  const h2h = {};
  teams.forEach(t1 => {
    h2h[t1] = {};
    teams.forEach(t2 => {
      if (t1 !== t2) h2h[t1][t2] = { pts: 0, gd: 0, gf: 0 };
    });
  });

  matches.forEach(m => {
    const score = scores[m.id];
    if (score && score.home !== '' && score.away !== '' && score.home !== undefined && score.away !== undefined) {
      const hg = parseInt(score.home);
      const ag = parseInt(score.away);
      if (isNaN(hg) || isNaN(ag)) return;

      const home = stats[m.home];
      const away = stats[m.away];

      home.pld++; away.pld++;
      home.gf += hg; home.ga += ag;
      away.gf += ag; away.ga += hg;

      if (hg > ag) {
        home.w++; home.pts += 3;
        away.l++;
        h2h[m.home][m.away].pts += 3;
      } else if (hg < ag) {
        away.w++; away.pts += 3;
        home.l++;
        h2h[m.away][m.home].pts += 3;
      } else {
        home.d++; away.d++;
        home.pts++; away.pts++;
        h2h[m.home][m.away].pts++;
        h2h[m.away][m.home].pts++;
      }

      h2h[m.home][m.away].gd += (hg - ag);
      h2h[m.away][m.home].gd += (ag - hg);
      h2h[m.home][m.away].gf += hg;
      h2h[m.away][m.home].gf += ag;
    }
  });

  // Compute GD
  Object.values(stats).forEach(s => { s.gd = s.gf - s.ga; });

  // Sort: pts > gd > gf > h2h pts > h2h gd > h2h gf
  const sorted = Object.values(stats).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    // Head-to-head
    const h2hA = h2h[a.team][b.team];
    const h2hB = h2h[b.team][a.team];
    if (h2hB.pts !== h2hA.pts) return h2hB.pts - h2hA.pts;
    if (h2hB.gd !== h2hA.gd) return h2hB.gd - h2hA.gd;
    if (h2hB.gf !== h2hA.gf) return h2hB.gf - h2hA.gf;
    return 0;
  });

  return sorted;
}

// ============================
//  BEST 3RD PLACED TEAMS
// ============================
function calculateBestThirdPlaced() {
  const thirdPlaced = [];
  Object.keys(GROUPS).forEach(gId => {
    const standings = calculateGroupStandings(gId);
    if (standings.length >= 3) {
      const third = { ...standings[2], group: gId };
      thirdPlaced.push(third);
    }
  });

  // Sort third-placed teams by: pts > gd > gf
  thirdPlaced.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return 0;
  });

  return thirdPlaced;
}

// ============================
//  3RD PLACE ASSIGNMENT
//  Backtracking algorithm
// ============================
function assignThirdPlaceTeams(qualifyingGroups) {
  const slots = [
    { matchId: 'R32_3',  possibleGroups: ['A','B','C','D','F'] },
    { matchId: 'R32_6',  possibleGroups: ['C','D','F','G','H'] },
    { matchId: 'R32_7',  possibleGroups: ['C','E','F','H','I'] },
    { matchId: 'R32_8',  possibleGroups: ['E','H','I','J','K'] },
    { matchId: 'R32_9',  possibleGroups: ['A','E','H','I','J'] },
    { matchId: 'R32_10', possibleGroups: ['B','E','F','I','J'] },
    { matchId: 'R32_13', possibleGroups: ['E','F','G','I','J'] },
    { matchId: 'R32_16', possibleGroups: ['D','E','I','J','L'] },
  ];

  const assignment = {};
  const used = new Set();

  function backtrack(idx) {
    if (idx === slots.length) return true;
    const slot = slots[idx];
    for (const group of slot.possibleGroups) {
      if (qualifyingGroups.includes(group) && !used.has(group)) {
        used.add(group);
        assignment[slot.matchId] = group;
        if (backtrack(idx + 1)) return true;
        used.delete(group);
        delete assignment[slot.matchId];
      }
    }
    return false;
  }

  backtrack(0);
  return assignment;
}

// ============================
//  RESOLVE KNOCKOUT TEAMS
// ============================
function resolveKnockoutTeam(from) {
  if (from.type === 'group') {
    const standings = calculateGroupStandings(from.group);
    if (standings[from.pos - 1] && standings[from.pos - 1].pld > 0) {
      return standings[from.pos - 1].team;
    }
    return null;
  }

  if (from.type === '3rd') {
    const thirdPlaced = calculateBestThirdPlaced();
    const qualifying = thirdPlaced.slice(0, 8).filter(t => t.pld > 0);
    if (qualifying.length < 8) return null;
    const qualGroups = qualifying.map(t => t.group).sort();
    const assignment = assignThirdPlaceTeams(qualGroups);

    // Find which match this "from" belongs to
    const koMatch = KNOCKOUT_MATCHES.find(m =>
      m.awayFrom === from || m.homeFrom === from
    );
    if (koMatch && assignment[koMatch.id]) {
      const assignedGroup = assignment[koMatch.id];
      const thirdTeam = qualifying.find(t => t.group === assignedGroup);
      return thirdTeam ? thirdTeam.team : null;
    }
    return null;
  }

  if (from.type === 'winner' || from.type === 'loser') {
    const koScores = getKnockoutScores();
    const score = koScores[from.matchId];
    if (!score || score.home === '' || score.away === '' || score.home === undefined || score.away === undefined) return null;
    const hg = parseInt(score.home);
    const ag = parseInt(score.away);
    if (isNaN(hg) || isNaN(ag)) return null;

    const prevMatch = KNOCKOUT_MATCHES.find(m => m.id === from.matchId);
    if (!prevMatch) return null;

    const homeTeam = resolveKnockoutTeam(prevMatch.homeFrom);
    const awayTeam = resolveKnockoutTeam(prevMatch.awayFrom);

    if (from.type === 'winner') return hg >= ag ? homeTeam : awayTeam;
    if (from.type === 'loser') return hg < ag ? homeTeam : awayTeam;
  }

  return null;
}

function getKnockoutTeamLabel(from) {
  const team = resolveKnockoutTeam(from);
  if (team) return team;

  // Fallback label
  if (from.type === 'group') return `${from.pos}º Grupo ${from.group}`;
  if (from.type === '3rd') return `3º (${from.possibleGroups.join('/')})`;
  if (from.type === 'winner') return `V. ${from.matchId.replace('_', ' ')}`;
  if (from.type === 'loser') return `P. ${from.matchId.replace('_', ' ')}`;
  return '?';
}

// ============================
//  RENDER: STATS BAR
// ============================
function renderStatsBar() {
  const scores = getScores();
  const koScores = getKnockoutScores();
  let played = 0;
  let totalGoals = 0;

  GROUP_MATCHES.forEach(m => {
    const s = scores[m.id];
    if (s && s.home !== '' && s.away !== '' && s.home !== undefined && s.away !== undefined) {
      const h = parseInt(s.home), a = parseInt(s.away);
      if (!isNaN(h) && !isNaN(a)) {
        played++;
        totalGoals += h + a;
      }
    }
  });

  KNOCKOUT_MATCHES.forEach(m => {
    const s = koScores[m.id];
    if (s && s.home !== '' && s.away !== '' && s.home !== undefined && s.away !== undefined) {
      const h = parseInt(s.home), a = parseInt(s.away);
      if (!isNaN(h) && !isNaN(a)) {
        played++;
        totalGoals += h + a;
      }
    }
  });

  const container = document.getElementById('stats-bar');
  container.innerHTML = `
    <div class="stat-card">
      <div class="stat-value">${played}</div>
      <div class="stat-label">Jogos Disputados</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${totalGoals}</div>
      <div class="stat-label">Gols Marcados</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${played > 0 ? (totalGoals / played).toFixed(1) : '0.0'}</div>
      <div class="stat-label">Média por Jogo</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${104 - played}</div>
      <div class="stat-label">Jogos Restantes</div>
    </div>
  `;
}

// ============================
//  RENDER: GROUPS
// ============================
function renderGroups() {
  const grid = document.getElementById('groups-grid');
  grid.innerHTML = '';

  const thirdPlaced = calculateBestThirdPlaced();
  const qualifiedThirds = new Set(thirdPlaced.slice(0, 8).filter(t => t.pld > 0).map(t => t.group));

  Object.keys(GROUPS).forEach(gId => {
    const standings = calculateGroupStandings(gId);
    const matches = GROUP_MATCHES.filter(m => m.group === gId);

    const card = document.createElement('div');
    card.className = 'group-card';
    card.innerHTML = `
      <div class="group-header">
        <h2>Grupo ${gId}</h2>
      </div>
      <div class="standings-wrapper">
        ${renderStandingsTable(standings, gId, qualifiedThirds)}
      </div>
      <div class="matches-section">
        ${renderMatchesByRound(matches)}
      </div>
    `;
    grid.appendChild(card);
  });

  renderThirdPlaceSection(thirdPlaced);
}

function renderStandingsTable(standings, groupId, qualifiedThirds) {
  const allPlayed = standings.every(s => s.pld === 3);
  const anyPlayed = standings.some(s => s.pld > 0);

  let rows = standings.map((s, i) => {
    let posClass = '';
    if (anyPlayed) {
      if (i < 2 && s.pld > 0) posClass = `pos-${i + 1}`;
      else if (i === 2) {
        posClass = qualifiedThirds.has(groupId) ? 'pos-3-qualified' : '';
        if (allPlayed && !qualifiedThirds.has(groupId)) posClass = 'pos-eliminated';
      }
      else if (i === 3 && allPlayed) posClass = 'pos-eliminated';
    }

    const gdStr = s.gd > 0 ? `+${s.gd}` : `${s.gd}`;
    const gdClass = s.gd > 0 ? 'positive' : s.gd < 0 ? 'negative' : '';

    return `
      <tr class="${posClass}">
        <td>${i + 1}</td>
        <td><div class="team-cell"><span class="team-flag">${getFlag(s.team)}</span><span class="team-name">${TEAMS[s.team].name}</span></div></td>
        <td class="stat-pts">${s.pts}</td>
        <td>${s.pld}</td>
        <td>${s.w}</td>
        <td>${s.d}</td>
        <td>${s.l}</td>
        <td>${s.gf}</td>
        <td>${s.ga}</td>
        <td class="stat-sg ${gdClass}">${gdStr}</td>
      </tr>
    `;
  }).join('');

  return `
    <table class="standings-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Seleção</th>
          <th>P</th>
          <th>J</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
          <th>GP</th>
          <th>GC</th>
          <th>SG</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderMatchesByRound(matches) {
  let html = '';
  const rounds = [1, 2, 3];
  const roundLabels = { 1: '1ª Rodada', 2: '2ª Rodada', 3: '3ª Rodada' };
  const scores = getScores();

  rounds.forEach(r => {
    const roundMatches = matches.filter(m => m.round === r);
    html += `<div class="round-header">${roundLabels[r]}</div>`;
    roundMatches.forEach(m => {
      const score = scores[m.id] || {};
      const homeVal = score.home !== undefined ? score.home : '';
      const awayVal = score.away !== undefined ? score.away : '';
      const todayClass = isToday(m.date) ? ' is-today' : '';
      const simClass = state.simulationMode && state.simScores[m.id] ? ' simulated' : '';

      html += `
        <div class="match-item${todayClass}">
          <div class="match-date">${formatDate(m.date)} — ${m.time}</div>
          <div class="match-teams">
            <div class="match-team home">
              <span class="team-name">${TEAMS[m.home].name}</span>
              <span class="team-flag">${getFlag(m.home)}</span>
            </div>
            <div class="match-score">
              <input type="number" class="score-input${homeVal !== '' ? ' has-value' : ''}${simClass}" min="0" max="99"
                     value="${homeVal}" data-match="${m.id}" data-side="home"
                     id="score-${m.id}-home" ${!state.isAdmin && !state.simulationMode ? 'disabled' : ''}>
              <span class="score-separator">×</span>
              <input type="number" class="score-input${awayVal !== '' ? ' has-value' : ''}${simClass}" min="0" max="99"
                     value="${awayVal}" data-match="${m.id}" data-side="away"
                     id="score-${m.id}-away" ${!state.isAdmin && !state.simulationMode ? 'disabled' : ''}>
            </div>
            <div class="match-team away">
              <span class="team-flag">${getFlag(m.away)}</span>
              <span class="team-name">${TEAMS[m.away].name}</span>
            </div>
          </div>
        </div>
      `;
    });
  });

  return html;
}

// ============================
//  RENDER: THIRD PLACE SECTION
// ============================
function renderThirdPlaceSection(thirdPlaced) {
  const section = document.getElementById('third-place-section');
  const anyPlayed = thirdPlaced.some(t => t.pld > 0);

  if (!anyPlayed) {
    section.innerHTML = '';
    return;
  }

  let cards = thirdPlaced.map((t, i) => {
    const qualified = i < 8 && t.pld > 0;
    const cls = qualified ? 'qualified' : (t.pld > 0 ? 'not-qualified' : '');
    const gdStr = t.gd > 0 ? `+${t.gd}` : `${t.gd}`;
    return `
      <div class="third-place-card ${cls}">
        <span class="rank">${i + 1}º</span>
        <div class="team-info">
          <span class="team-flag">${getFlag(t.team)}</span>
          <span class="team-name">${TEAMS[t.team].name}</span>
        </div>
        <span class="team-stats">${t.pts}pts ${gdStr} (${t.group})</span>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="third-place-title">📊 Ranking dos 3º Colocados (8 melhores avançam)</div>
    <div class="third-place-grid">${cards}</div>
  `;
}

// ============================
//  RENDER: KNOCKOUT BRACKET
// ============================
function renderKnockout() {
  renderKnockoutBracket();
  renderKnockoutList();
}

function renderKnockoutBracket() {
  const bracket = document.getElementById('bracket');
  bracket.innerHTML = '';

  const roundOrder = ['R32', 'R16', 'QF', 'SF', 'FINAL'];
  const koScores = getKnockoutScores();

  roundOrder.forEach(roundKey => {
    const roundDiv = document.createElement('div');
    roundDiv.className = 'bracket-round';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'bracket-round-title';
    titleDiv.textContent = ROUND_NAMES[roundKey];
    roundDiv.appendChild(titleDiv);

    const roundMatches = KNOCKOUT_MATCHES.filter(m => m.round === roundKey);

    roundMatches.forEach(m => {
      const homeTeam = resolveKnockoutTeam(m.homeFrom);
      const awayTeam = resolveKnockoutTeam(m.awayFrom);
      const homeLabel = getKnockoutTeamLabel(m.homeFrom);
      const awayLabel = getKnockoutTeamLabel(m.awayFrom);
      const score = koScores[m.id] || {};

      const homeScore = score.home !== undefined ? score.home : '';
      const awayScore = score.away !== undefined ? score.away : '';

      // Determine winner/loser
      let homeWinner = false, awayWinner = false;
      if (homeScore !== '' && awayScore !== '') {
        const hg = parseInt(homeScore), ag = parseInt(awayScore);
        if (!isNaN(hg) && !isNaN(ag)) {
          homeWinner = hg >= ag;
          awayWinner = ag > hg;
        }
      }

      const isFinal = m.round === 'FINAL';
      const matchDiv = document.createElement('div');
      matchDiv.className = `bracket-match${isFinal && homeWinner ? ' champion' : ''}`;

      matchDiv.innerHTML = `
        <div class="bracket-match-team${homeWinner ? ' winner' : ''}${awayWinner ? ' loser' : ''}">
          ${homeTeam ? `<span class="team-flag">${getFlag(homeTeam)}</span><span class="team-name">${TEAMS[homeTeam].name}</span>` : `<span class="team-placeholder">${homeLabel}</span>`}
          <input type="number" class="bracket-score" min="0" max="99" value="${homeScore}"
                 data-ko-match="${m.id}" data-side="home" ${!homeTeam || !awayTeam || (!state.isAdmin && !state.simulationMode) ? 'disabled' : ''}>
        </div>
        <div class="bracket-match-team${awayWinner ? ' winner' : ''}${homeWinner ? ' loser' : ''}">
          ${awayTeam ? `<span class="team-flag">${getFlag(awayTeam)}</span><span class="team-name">${TEAMS[awayTeam].name}</span>` : `<span class="team-placeholder">${awayLabel}</span>`}
          <input type="number" class="bracket-score" min="0" max="99" value="${awayScore}"
                 data-ko-match="${m.id}" data-side="away" ${!homeTeam || !awayTeam || (!state.isAdmin && !state.simulationMode) ? 'disabled' : ''}>
        </div>
      `;

      roundDiv.appendChild(matchDiv);
    });

    bracket.appendChild(roundDiv);
  });

  // Disputa de 3º lugar (append after final)
  const thirdMatch = KNOCKOUT_MATCHES.find(m => m.round === '3RD');
  if (thirdMatch) {
    const thirdRound = document.createElement('div');
    thirdRound.className = 'bracket-round';
    const titleDiv = document.createElement('div');
    titleDiv.className = 'bracket-round-title';
    titleDiv.textContent = ROUND_NAMES['3RD'];
    thirdRound.appendChild(titleDiv);

    const homeTeam = resolveKnockoutTeam(thirdMatch.homeFrom);
    const awayTeam = resolveKnockoutTeam(thirdMatch.awayFrom);
    const homeLabel = getKnockoutTeamLabel(thirdMatch.homeFrom);
    const awayLabel = getKnockoutTeamLabel(thirdMatch.awayFrom);
    const score = koScores[thirdMatch.id] || {};
    const homeScore = score.home !== undefined ? score.home : '';
    const awayScore = score.away !== undefined ? score.away : '';

    const matchDiv = document.createElement('div');
    matchDiv.className = 'bracket-match';
    matchDiv.innerHTML = `
      <div class="bracket-match-team">
        ${homeTeam ? `<span class="team-flag">${getFlag(homeTeam)}</span><span class="team-name">${TEAMS[homeTeam].name}</span>` : `<span class="team-placeholder">${homeLabel}</span>`}
        <input type="number" class="bracket-score" min="0" max="99" value="${homeScore}"
               data-ko-match="${thirdMatch.id}" data-side="home" ${!homeTeam || !awayTeam || (!state.isAdmin && !state.simulationMode) ? 'disabled' : ''}>
      </div>
      <div class="bracket-match-team">
        ${awayTeam ? `<span class="team-flag">${getFlag(awayTeam)}</span><span class="team-name">${TEAMS[awayTeam].name}</span>` : `<span class="team-placeholder">${awayLabel}</span>`}
        <input type="number" class="bracket-score" min="0" max="99" value="${awayScore}"
               data-ko-match="${thirdMatch.id}" data-side="away" ${!homeTeam || !awayTeam || (!state.isAdmin && !state.simulationMode) ? 'disabled' : ''}>
      </div>
    `;
    thirdRound.appendChild(matchDiv);
    bracket.appendChild(thirdRound);
  }
}

function renderKnockoutList() {
  const container = document.getElementById('knockout-list');
  const tabsContainer = document.getElementById('knockout-round-tabs');
  container.innerHTML = '';
  tabsContainer.innerHTML = '';

  const roundOrder = ['R32', 'R16', 'QF', 'SF', 'FINAL', '3RD'];
  const koScores = getKnockoutScores();

  roundOrder.forEach(roundKey => {
    // Tab button
    const btn = document.createElement('button');
    btn.className = 'knockout-round-btn';
    btn.textContent = ROUND_NAMES[roundKey];
    btn.dataset.round = roundKey;
    tabsContainer.appendChild(btn);

    // Section
    const section = document.createElement('div');
    section.className = 'knockout-round-section';
    section.id = `ko-section-${roundKey}`;

    const title = document.createElement('div');
    title.className = 'round-section-title';
    title.textContent = ROUND_NAMES[roundKey];
    section.appendChild(title);

    const roundMatches = KNOCKOUT_MATCHES.filter(m => m.round === roundKey);
    roundMatches.forEach(m => {
      const homeTeam = resolveKnockoutTeam(m.homeFrom);
      const awayTeam = resolveKnockoutTeam(m.awayFrom);
      const homeLabel = getKnockoutTeamLabel(m.homeFrom);
      const awayLabel = getKnockoutTeamLabel(m.awayFrom);
      const score = koScores[m.id] || {};
      const homeScore = score.home !== undefined ? score.home : '';
      const awayScore = score.away !== undefined ? score.away : '';

      const matchDiv = document.createElement('div');
      matchDiv.className = 'bracket-match';
      matchDiv.innerHTML = `
        <div class="bracket-match-team">
          ${homeTeam ? `<span class="team-flag">${getFlag(homeTeam)}</span><span class="team-name">${TEAMS[homeTeam].name}</span>` : `<span class="team-placeholder">${homeLabel}</span>`}
          <input type="number" class="bracket-score" min="0" max="99" value="${homeScore}"
                 data-ko-match="${m.id}" data-side="home" ${!homeTeam || !awayTeam || (!state.isAdmin && !state.simulationMode) ? 'disabled' : ''}>
        </div>
        <div class="bracket-match-team">
          ${awayTeam ? `<span class="team-flag">${getFlag(awayTeam)}</span><span class="team-name">${TEAMS[awayTeam].name}</span>` : `<span class="team-placeholder">${awayLabel}</span>`}
          <input type="number" class="bracket-score" min="0" max="99" value="${awayScore}"
                 data-ko-match="${m.id}" data-side="away" ${!homeTeam || !awayTeam || (!state.isAdmin && !state.simulationMode) ? 'disabled' : ''}>
        </div>
      `;
      section.appendChild(matchDiv);
    });

    container.appendChild(section);
  });
}

// ============================
//  EVENT HANDLERS
// ============================
function handleScoreInput(e) {
  const input = e.target;
  if (!input.classList.contains('score-input')) return;

  const matchId = input.dataset.match;
  const side = input.dataset.side;
  const val = input.value;

  const scores = getScores();
  if (!scores[matchId]) scores[matchId] = {};
  scores[matchId][side] = val;

  if (state.simulationMode) {
    input.classList.add('simulated');
  } else {
    saveState();
  }

  // Only re-render if both scores are set (or both cleared)
  const otherSide = side === 'home' ? 'away' : 'home';
  const otherVal = scores[matchId][otherSide];
  if ((val !== '' && otherVal !== '' && otherVal !== undefined) || (val === '' && (otherVal === '' || otherVal === undefined))) {
    renderAll();
  }
}

function handleKnockoutScoreInput(e) {
  const input = e.target;
  if (!input.classList.contains('bracket-score')) return;

  const matchId = input.dataset.koMatch;
  const side = input.dataset.side;
  const val = input.value;

  if (!matchId) return;

  const koScores = getKnockoutScores();
  if (!koScores[matchId]) koScores[matchId] = {};
  koScores[matchId][side] = val;

  if (!state.simulationMode) {
    saveState();
  }

  const otherSide = side === 'home' ? 'away' : 'home';
  const otherVal = koScores[matchId][otherSide];
  if ((val !== '' && otherVal !== '' && otherVal !== undefined) || (val === '' && (otherVal === '' || otherVal === undefined))) {
    renderAll();
  }
}

function handleTabSwitch(tab) {
  state.activeTab = tab;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.toggle('active', el.id === `content-${tab}`);
  });

  if (tab === 'knockout') {
    renderKnockout();
  }
}

// ============================
//  SIMULATION
// ============================
function toggleSimulation(enabled) {
  state.simulationMode = enabled;
  document.body.classList.toggle('sim-mode', enabled);
  document.getElementById('sim-bar').classList.toggle('active', enabled);

  if (enabled) {
    // Copy current scores to simulation
    state.simScores = JSON.parse(JSON.stringify(state.scores));
    state.simKnockoutScores = JSON.parse(JSON.stringify(state.knockoutScores));
    showToast('⚡ Modo simulação ativado!');
  } else {
    state.simScores = {};
    state.simKnockoutScores = {};
    showToast('✅ Voltando aos dados reais');
  }

  renderAll();
}

function simulateAll() {
  if (!state.simulationMode) return;

  // 1. Generate random scores for all unplayed group matches
  GROUP_MATCHES.forEach(m => {
    if (!state.simScores[m.id] || state.simScores[m.id].home === '' || state.simScores[m.id].home === undefined) {
      state.simScores[m.id] = {
        home: Math.floor(Math.random() * 4),
        away: Math.floor(Math.random() * 4),
      };
    }
  });

  // 2. Process knockout rounds in order so each round resolves before the next
  const roundOrder = ['R32', 'R16', 'QF', 'SF', 'FINAL', '3RD'];
  roundOrder.forEach(roundKey => {
    const roundMatches = KNOCKOUT_MATCHES.filter(m => m.round === roundKey);
    roundMatches.forEach(m => {
      const homeTeam = resolveKnockoutTeam(m.homeFrom);
      const awayTeam = resolveKnockoutTeam(m.awayFrom);
      if (homeTeam && awayTeam && (!state.simKnockoutScores[m.id] || state.simKnockoutScores[m.id].home === '' || state.simKnockoutScores[m.id].home === undefined)) {
        let h = Math.floor(Math.random() * 4);
        let a = Math.floor(Math.random() * 4);
        // Knockout can't be a draw — need a winner
        if (h === a) h += 1;
        state.simKnockoutScores[m.id] = { home: h, away: a };
      }
    });
  });

  showToast('🎲 Simulação gerada!');
  renderAll();
}

function clearSimulation() {
  if (!state.simulationMode) return;
  state.simScores = JSON.parse(JSON.stringify(state.scores));
  state.simKnockoutScores = JSON.parse(JSON.stringify(state.knockoutScores));
  showToast('🗑️ Simulação limpa!');
  renderAll();
}

// ============================
//  RENDER ALL
// ============================
function renderAll() {
  renderStatsBar();
  renderGroups();
  if (state.activeTab === 'knockout') {
    renderKnockout();
  }
}

// ============================
//  AUTH SETUP
// ============================
function setupAuth() {
  const modal = document.getElementById('login-modal');
  const btnLogout = document.getElementById('btn-logout');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const loginForm = document.getElementById('login-form');
  const errorDiv = document.getElementById('login-error');

  supabase.auth.getSession().then(({ data: { session } }) => {
    handleSession(session);
  });

  supabase.auth.onAuthStateChange((_event, session) => {
    handleSession(session);
  });

  function handleSession(session) {
    const wasAdmin = state.isAdmin;
    state.isAdmin = !!session;
    
    if (state.isAdmin) {
      btnLogout.style.display = 'inline-block';
      modal.style.display = 'none';
      if (!wasAdmin) showToast('✅ Login realizado com sucesso!');
    } else {
      btnLogout.style.display = 'none';
    }
    
    if (wasAdmin !== state.isAdmin) {
      renderAll();
    }
  }

  // Abre o modal de login se a URL tiver 'admin' em qualquer lugar (?admin, #admin, /admin)
  if (window.location.href.includes('admin')) {
    modal.style.display = 'flex';
  }
  btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
    errorDiv.textContent = '';
  });
  
  btnLogout.addEventListener('click', async () => {
    await supabase.auth.signOut();
    showToast('👋 Deslogado com sucesso.');
  });

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorDiv.textContent = 'Autenticando...';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      errorDiv.textContent = 'Erro: ' + error.message;
    } else {
      errorDiv.textContent = '';
      loginForm.reset();
    }
  });
}

// ============================
//  INITIALIZATION
// ============================
async function init() {
  setupAuth();
  await loadState();

  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => handleTabSwitch(btn.dataset.tab));
  });

  // Score inputs — event delegation
  document.getElementById('groups-grid').addEventListener('input', handleScoreInput);
  document.getElementById('bracket').addEventListener('input', handleKnockoutScoreInput);
  document.getElementById('knockout-list').addEventListener('input', handleKnockoutScoreInput);

  // Simulation toggle
  document.getElementById('sim-toggle').addEventListener('change', (e) => {
    toggleSimulation(e.target.checked);
  });

  // Simulation buttons
  document.getElementById('sim-random').addEventListener('click', simulateAll);
  document.getElementById('sim-clear').addEventListener('click', clearSimulation);

  // Initial render
  renderAll();
}

// Start!
document.addEventListener('DOMContentLoaded', init);
