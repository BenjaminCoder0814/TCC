export type Answer = { key: string; value: string | number | boolean };

export type PlanResult = {
  goal: 'emagrecimento' | 'hipertrofia' | 'condicionamento';
  diet: 'lowcarb' | 'hiperproteica' | 'mediterranea' | 'vegetariana';
  split: 'fullbody' | 'abc' | 'ab' | 'hiit';
  frequency: number;
  homeOrGym: 'casa' | 'academia';
  equipment: string[];
  notes: string[];
};

export const QUESTIONS = [
  { key: 'objetivo', q: 'Qual seu principal objetivo?', opts: ['emagrecimento', 'hipertrofia', 'condicionamento'] },
  { key: 'sexo', q: 'Sexo?', opts: ['M', 'F', 'Outro'] },
  { key: 'idade', q: 'Idade?', type: 'number' },
  { key: 'altura', q: 'Altura (cm)?', type: 'number' },
  { key: 'peso', q: 'Peso (kg)?', type: 'number' },
  { key: 'freq', q: 'Quantos dias/semana pretende treinar?', type: 'number' },
  { key: 'local', q: 'Vai treinar em casa ou academia?', opts: ['casa', 'academia'] },
  { key: 'equip', q: 'Selecione equipamentos que você possui', multi: true, opts: ['halteres', 'barras', 'elásticos', 'kettlebell', 'esteira', 'bicicleta'] },
  { key: 'restr', q: 'Restrições/alergias alimentares?', multi: true, opts: ['lactose', 'glúten', 'amendoim', 'frutos do mar', 'nenhuma'] },
  { key: 'nivel', q: 'Nível atual', opts: ['iniciante', 'intermediario', 'avancado'] },
  { key: 'cardio', q: 'Gosta de cardio?', opts: ['sim', 'nao'] },
  { key: 'tempo', q: 'Tempo disponível por sessão (min)?', type: 'number' },
  { key: 'sono', q: 'Qualidade do sono?', opts: ['baixa', 'media', 'alta'] },
  { key: 'estresse', q: 'Nível de estresse?', opts: ['baixo', 'medio', 'alto'] },
  { key: 'meta', q: 'Prazo para primeira meta (semanas)?', type: 'number' },
];

export function computePlan(answers: Answer[]): PlanResult {
  const get = (k: string) => answers.find(a => a.key === k)?.value as any;
  const goal = get('objetivo') || 'condicionamento';
  const freq = Number(get('freq') || 3);
  const local = (get('local') || 'casa') as 'casa' | 'academia';
  const equip = (get('equip') || []) as string[];
  const nivel = get('nivel') || 'iniciante';
  const tempo = Number(get('tempo') || 40);

  let split: PlanResult['split'] = 'fullbody';
  if (goal === 'hipertrofia' && freq >= 5) split = 'abc';
  else if (goal === 'hipertrofia' && freq >= 3) split = 'ab';
  else if (goal === 'emagrecimento' && tempo <= 30) split = 'hiit';

  let diet: PlanResult['diet'] = 'mediterranea';
  if (goal === 'emagrecimento') diet = 'lowcarb';
  if (goal === 'hipertrofia') diet = 'hiperproteica';

  const notes: string[] = [];
  if (local === 'casa' && equip.length === 0) notes.push('Foco em peso do corpo e elásticos.');
  if (nivel === 'iniciante') notes.push('Progredir carga gradualmente e priorizar técnica.');
  if (tempo < 30) notes.push('Manter intensidade alta (descanso curto).');

  return { goal, diet, split, frequency: freq, homeOrGym: local, equipment: equip, notes };
}