import { StoryTopic, Character, GalleryItem } from '../types';
import heroImage from '../assets/images/caatinga_hero_poster_1789063383833.jpg';
import felipeImage from '../assets/images/felipe_registro_campo.png';
import felipePersonagemImage from '../assets/images/felipe_personagem.png';
import osmarPersonagemImage from '../assets/images/osmar_personagem.png';
import arthurPersonagemImage from '../assets/images/arthur_personagem.png';
import thomasPersonagemImage from '../assets/images/thomas_personagem.png';
import pamelaPersonagemImage from '../assets/images/pamela_personagem.png';
import erickPersonagemImage from '../assets/images/erick_personagem.png';
import palomaPersonagemImage from '../assets/images/paloma_personagem.png';
import antonelaPersonagemImage from '../assets/images/antonela_personagem.png';
import entrevistadoraPersonagemImage from '../assets/images/entrevistadora_personagem.png';
import marcosPersonagemImage from '../assets/images/marcos_personagem.png';
import pauloPersonagemImage from '../assets/images/paulo_personagem.png';
import mariaPersonagemImage from '../assets/images/maria_personagem.png';
import jornalistaPersonagemImage from '../assets/images/jornalista_personagem.png';
import medicoPersonagemImage from '../assets/images/medico_personagem.png';
import cientista01PersonagemImage from '../assets/images/cientista01_personagem.png';
import drhenriquePersonagemImage from '../assets/images/drhenrique_personagem.png';
import cientista02PersonagemImage from '../assets/images/cientista02_personagem.png';
import maedeosmarPersonagemImage from '../assets/images/maedeosmar_personagem.png';
import flaviaPersonagemImage from '../assets/images/flavia_personagem.png';
import paciente01PersonagemImage from '../assets/images/paciente01_personagem.png';
import paciente02PersonagemImage from '../assets/images/paciente02_personagem.png';
import segurancaPersonagemImage from '../assets/images/seguranca_personagem.png';
import pacientePersonagemImage from '../assets/images/paciente_personagem.png';
import paciente03PersonagemImage from '../assets/images/paciente03_personagem.png';
import amigodefelipePersonagemImage from '../assets/images/amigodefelipe_personagem.png';
import maedeesposadethomasPersonagemImage from '../assets/images/maedeesposadethomas_personagem.png';
import angelaPersonagemImage from '../assets/images/angela_personagem.png';
import geraldaPersonagemImage from '../assets/images/geralda_personagem.png';
import aluna01PersonagemImage from '../assets/images/aluna01_personagem.png';
import aluna02PersonagemImage from '../assets/images/aluna02_personagem.png';
import aluno03PersonagemImage from '../assets/images/aluno03_personagem.png';
import thiagoPersonagemImage from '../assets/images/thiago_personagem.png';
import claraPersonagemImage from '../assets/images/clara_personagem.png';
import antonioPersonagemImage from '../assets/images/antonio_personagem.png';
import pedroPersonagemImage from '../assets/images/pedro_personagem.png';
import protestante01PersonagemImage from '../assets/images/protestante01_personagem.jpg';
import protestante02PersonagemImage from '../assets/images/protestante02_personagem.png';
import protestante03PersonagemImage from '../assets/images/protestante03_personagem.png';
import infectionImage from '../assets/images/infection_story_card_1789063410655.jpg';

// Fotos reais de produção/bastidores, usadas na galeria em formato mosaico
import producao01 from '../assets/images/galeria/producao_01.webp';
import producao02 from '../assets/images/galeria/producao_02.webp';
import producao03 from '../assets/images/galeria/producao_03.webp';
import producao04 from '../assets/images/galeria/producao_04.webp';
import producao05 from '../assets/images/galeria/producao_05.webp';
import producao06 from '../assets/images/galeria/producao_06.webp';
import producao07 from '../assets/images/galeria/producao_07.webp';
import producao08 from '../assets/images/galeria/producao_08.webp';
import producao09 from '../assets/images/galeria/producao_09.webp';
import producao10 from '../assets/images/galeria/producao_10.webp';
import producao11 from '../assets/images/galeria/producao_11.webp';
import producao12 from '../assets/images/galeria/producao_12.webp';
import producao13 from '../assets/images/galeria/producao_13.webp';
import producao14 from '../assets/images/galeria/producao_14.webp';
import producao15 from '../assets/images/galeria/producao_15.webp';
import producao16 from '../assets/images/galeria/producao_16.webp';
import producao17 from '../assets/images/galeria/producao_17.webp';
import producao18 from '../assets/images/galeria/producao_18.webp';
import producao19 from '../assets/images/galeria/producao_19.jpg';
import producao20 from '../assets/images/galeria/producao_20.gif';
import producao21 from '../assets/images/galeria/producao_21.gif';
import producao22 from '../assets/images/galeria/producao_22.gif';
import producao23 from '../assets/images/galeria/producao_23.gif';
import producao24 from '../assets/images/galeria/producao_24.gif';
import producao26 from '../assets/images/galeria/producao_26.gif';
import producao27 from '../assets/images/galeria/producao_27.gif';
import producao29 from '../assets/images/galeria/producao_29.gif';
import producao30 from '../assets/images/galeria/producao_30.gif';
import producao31 from '../assets/images/galeria/producao_31.gif';
import producao32 from '../assets/images/galeria/producao_32.gif';
import producao33 from '../assets/images/galeria/producao_33.gif';
import producao34 from '../assets/images/galeria/producao_34.gif';

export const MOVIE_DATA = {
  title: 'QUANDO O PLANETA RESPONDE',
  originalLabel: 'FILME ORIGINAL',
  tagline: 'A NATUREZA NÃO ESQUECE. ELA RESPONDE.',
  year: 'EM BREVE',
  rating: '+12',
  duration: 'Trailer',
  fullDuration: '1h',
  genres: 'Suspense • Drama • Ficção',
  city: 'Oleandro',
  biome: 'Caatinga',
  synopsis:
    'Em Oleandro, uma cidade cercada pela Caatinga, queimadas e desmatamentos começam a provocar consequências inesperadas. Animais deixam seus habitats e avançam para a zona urbana, enquanto uma misteriosa infecção começa a se espalhar. Em meio ao caos, Osmar parte em busca da verdade sobre o desaparecimento de seu irmão Felipe e descobre que por trás da crise existem segredos muito maiores do que imaginava.',
  heroImage: heroImage,
  copyright: '© 2026 Quando o Planeta Responde. Todos os direitos reservados.',
};

export const STORY_TOPICS: StoryTopic[] = [
  {
    id: 'felipe',
    title: 'O DESAPARECIMENTO DE FELIPE',
    tag: 'ARQUIVO CONFIDENCIAL #01',
    image: felipeImage,
    shortDesc: 'A última expedição nas queimadas da Serra Vermelha.',
    fullStory: [
      'Felipe, pesquisador florestal e mateiro experiente de Oleandro, adentrou a área de contenção da Serra Vermelha quatro noites antes do primeiro surto reportado no município.',
      'Seu último diário de bordo continha registros de anomalias na flora nativa: espinhos de mandacaru vertendo uma seiva fosforescente e carcaças de animais com calcificação fúngica nos ossos.',
      'Quando seu acampamento foi encontrado por Osmar, pertences intactos e o jipe ainda ligado apontavam que Felipe não fugiu das chamas — algo o levou para dentro da névoa quente.',
    ],
    evidence: [
      'Gravador de voz com 14 minutos de ruído estático e respiração acelerada',
      'Mapa topográfico da Caatinga com coordenadas riscadas a cinza',
      'Amostra vegetal número 7: casca de juazeiro com filamentos desconhecidos',
    ],
  },
  {
    id: 'infeccao',
    title: 'A INFECÇÃO',
    tag: 'PROTOCOLO SANITÁRIO #04',
    image: infectionImage,
    shortDesc: 'Esporos transportados pela fumaça densa do sertão.',
    fullStory: [
      'A cinza resultante das queimadas descontroladas na Caatinga não trouxe apenas fuligem: trouxe partículas biológicas latentes há séculos no solo profundo do semiárido.',
      'Ao inalar a fumaça nas bordas de Oleandro, os primeiros pacientes apresentaram sintomas incomuns: febre seca, pupilas dilatadas e uma sensibilidade extrema a vibrações na terra.',
      'Não se trata de um vírus comum, mas de uma resposta simbiótica e agressiva do ecossistema, transformando o hospedeiro em um vetor de defesa territorial.',
    ],
    evidence: [
      'Laudo hospitalar do Posto Central de Oleandro em sigilo',
      'Detecção de micélio térmico resistente a mais de 400°C',
      'Quarentena preventiva no perímetro leste da cidade',
    ],
  },
];

export const CHARACTERS: Character[] = [
  {
    name: 'Osmar',
    image: osmarPersonagemImage,
    imagePosition: '58% center',
    actorCredit: 'Interpretado por Lucas Pablo',
    description:
      'Osmar é irmão de Felipe e um dos personagens centrais da história. Após o desaparecimento do irmão, ele passa a buscar respostas para entender o que realmente aconteceu. Sua investigação o levará a descobrir segredos que vão muito além do desaparecimento de Felipe.',
  },
  {
    name: 'Felipe',
    image: felipePersonagemImage,
    actorCredit: 'Interpretado por Daniel Cardoso',
    description:
      'Felipe é irmão de Osmar. Seu desaparecimento está diretamente ligado a uma grande descoberta que pode mudar o futuro e revelar a verdadeira dimensão dos acontecimentos que estão afetando Oleandro.',
  },
  {
    name: 'Arthur',
    image: arthurPersonagemImage,
    imagePosition: '53% 35%',
    imageZoom: 1.3,
    actorCredit: 'Interpretado por Lucas Matheus',
    description:
      'Arthur é um estudante engajado na luta pela preservação ambiental. Ao lado de seus colegas, protesta contra a intensa destruição ambiental que vem acontecendo na cidade de Oleandro. Ele tenta chamar a atenção das autoridades e da população para os riscos da situação, mas acaba sendo silenciado.',
  },
  {
    name: 'Thomas',
    image: thomasPersonagemImage,
    imagePosition: '43% center',
    actorCredit: 'Interpretado por Sidcley de Souza',
    description:
      'Thomas é o ex-prefeito de Oleandro e um personagem movido por interesses próprios. Por trás de uma postura aparentemente amigável, esconde planos que provocarão consequências graves para diferentes pessoas. O caos que se aproxima não será apenas uma consequência dos acontecimentos, mas também parte de seus próprios objetivos.',
  },
  {
    name: 'Marcos',
    image: marcosPersonagemImage,
    imagePosition: '40% 33%',
    imageZoom: 1.35,
    actorCredit: 'Interpretado por Isac Medeiros',
    description:
      'Marcos é o atual prefeito de Oleandro e parceiro político e amigo de Thomas. Enquanto recebe alertas sobre os graves impactos ambientais que atingem a cidade, também é informado de que uma obra sob sua responsabilidade poderá contribuir ainda mais para o agravamento da situação. Mesmo diante dos sinais de alerta, suas decisões terão consequências para toda a população.',
  },
  {
    name: 'Rebeca',
    image: pamelaPersonagemImage,
    imagePosition: '60% 40%',
    imageZoom: 1.5,
    actorCredit: 'Interpretada por Allana',
    description:
      'Rebeca é filha de Thomas e busca apenas ter liberdade para viver sua própria vida. Ela tenta se afastar dos constantes controles e imposições do pai, procurando construir seu próprio caminho. Porém, acontecimentos inesperados farão com que sua vida tome um rumo que ela jamais imaginou.',
  },
  {
    name: 'Erick',
    image: erickPersonagemImage,
    imagePosition: '36% 38%',
    imageZoom: 1.3,
    actorCredit: 'Interpretado por Aquiles Lima',
    description:
      'Erick vive um relacionamento secreto com Rebeca. Os dois tentam manter um romance intenso longe dos olhos de Thomas, enfrentando as dificuldades de manter a relação escondida. O que eles não sabem é que acontecimentos futuros colocarão esse relacionamento à prova.',
  },
  {
    name: 'Paloma',
    image: palomaPersonagemImage,
    imagePosition: '39% 35%',
    imageZoom: 1.25,
    actorCredit: 'Interpretada por Alice Cabral',
    description:
      'Paloma é uma estudante que começa a desenvolver um interesse especial por Osmar. Aos poucos, ela tenta se aproximar dele e criar um vínculo, mesmo percebendo que Osmar carrega conflitos e preocupações que dificultam sua aproximação.',
  },
  {
    name: 'Antonela',
    image: antonelaPersonagemImage,
    imagePosition: '46% 38%',
    imageZoom: 1.3,
    actorCredit: 'Interpretada por Ana Beatriz',
    description:
      'Antonela é a melhor amiga de Paloma e está sempre ao seu lado. Conselheira e amiga fiel, procura ajudá-la a compreender seus sentimentos e a lidar com sua aproximação de Osmar.',
  },
  {
    name: 'Entrevistadora',
    image: entrevistadoraPersonagemImage,
    imagePosition: '51% 45%',
    imageZoom: 1.4,
    actorCredit: 'Interpretada por Fabiana Mello',
    description:
      'Jornalista da TV Sertão Arretado que cobre de perto os impactos das queimadas e da misteriosa infecção que assombram Oleandro.',
  },
  {
    name: 'Paulo',
    image: pauloPersonagemImage,
    imagePosition: '53% 24%',
    imageZoom: 1.25,
    actorCredit: 'Interpretado por Damião Cardoso',
    description:
      'Paulo é um agricultor que vive do trabalho no campo. Sua rotina e seu modo de vida serão diretamente afetados pelos acontecimentos que começam a atingir a região, fazendo com que ele enfrente consequências cada vez mais graves.',
  },
  {
    name: 'Maria',
    image: mariaPersonagemImage,
    imagePosition: '50% 32%',
    imageZoom: 1.25,
    actorCredit: 'Interpretada por Lurdes Cardoso',
    description:
      'Maria é esposa de Paulo e compartilha com ele os desafios enfrentados no campo. Juntos, os dois passarão por momentos de grande tensão à medida que o vírus e seus efeitos começam a ameaçar suas vidas.',
  },
  {
    name: 'Mãe de Osmar',
    image: maedeosmarPersonagemImage,
    imagePosition: '45% 28%',
    imageZoom: 1.2,
    actorCredit: 'Interpretada por Maria Aparecida',
    description:
      'A mãe de Osmar e Felipe carrega as marcas de uma vida difícil. Após precisar cuidar dos dois filhos praticamente sozinha, enfrenta consequências emocionais que acabam refletindo na relação com Osmar. Seus conflitos com o filho revelam uma história familiar marcada por dificuldades, mágoas e sentimentos não resolvidos.',
  },
  {
    name: 'Jornalista',
    image: jornalistaPersonagemImage,
    imagePosition: '39% 40%',
    imageZoom: 1.15,
    actorCredit: 'Interpretado por Brendow Andrade',
    description:
      'Repórter de um telejornal regional que leva ao ar as primeiras notícias sobre o caos que se instala em Oleandro.',
  },
  {
    name: 'Médico',
    image: medicoPersonagemImage,
    imagePosition: '47% 30%',
    imageZoom: 1.2,
    actorCredit: 'Interpretado por Rafael Florentino',
    description:
      'Profissional de saúde do hospital de campanha que atende os primeiros casos da misteriosa infecção que se espalha por Oleandro.',
  },
  {
    name: 'Dr. Henrique Valença',
    image: drhenriquePersonagemImage,
    imagePosition: '47% 38%',
    imageZoom: 1.2,
    actorCredit: 'Interpretado por Walter Marques',
    description:
      'Dr. Henrique é o responsável por investigar e analisar os casos relacionados ao vírus e às vacinas. Sua investigação será fundamental para compreender a origem dos acontecimentos e revelar informações importantes sobre o que está acontecendo em Oleandro.',
  },
  {
    name: 'Cientista 01',
    image: cientista01PersonagemImage,
    imagePosition: '54% 32%',
    imageZoom: 1.25,
    actorCredit: 'Interpretado por Alessandro Rique',
    description:
      'Pesquisador enviado para analisar as amostras coletadas em Oleandro, tentando entender a origem da infecção antes que se espalhe ainda mais.',
  },
  {
    name: 'Cientista 02',
    image: cientista02PersonagemImage,
    imagePosition: '55% 30%',
    imageZoom: 1.25,
    actorCredit: 'Interpretado por José Orlando',
    description:
      'Membro da equipe de pesquisa que trabalha ao lado do Cientista 01 para decifrar a origem da infecção que assola Oleandro.',
  },
  {
    name: 'Flávia',
    image: flaviaPersonagemImage,
    imagePosition: '48% 35%',
    imageZoom: 1.3,
    actorCredit: 'Interpretada por Mayhara Cardoso',
    description:
      'Flávia é uma profissional da área da saúde que acompanha de perto os acontecimentos relacionados aos pacientes e ao avanço dos casos. Sua atuação a coloca em contato direto com os efeitos da crise provocada pelo vírus.',
  },
  {
    name: 'Paciente 01',
    image: paciente01PersonagemImage,
    imagePosition: '48% 26%',
    imageZoom: 1.2,
    actorCredit: 'Interpretada por Estefani Vitória',
    description:
      'Paciente 01 é mãe do Paciente 02. Ao perceber que há algo estranho acontecendo com seu filho, começa a desconfiar de que ele esteja enfrentando um problema muito mais grave do que aparenta.',
  },
  {
    name: 'Paciente 02',
    image: paciente02PersonagemImage,
    imagePosition: '55% 32%',
    imageZoom: 1.2,
    actorCredit: 'Interpretado por Erick',
    description:
      'Paciente 02 é filho da Paciente 01 e apresenta sinais que despertam preocupação.',
  },
  {
    name: 'Segurança',
    image: segurancaPersonagemImage,
    imagePosition: '53% 27%',
    imageZoom: 1.25,
    actorCredit: 'Interpretado por Carlos Daniel',
    description:
      'O segurança atua em meio aos acontecimentos que começam a tomar conta de Oleandro, tendo contato direto com situações de tensão e perigo provocadas pelo avanço da crise.',
  },
  {
    name: 'Paciente',
    image: pacientePersonagemImage,
    imagePosition: '49% 34%',
    imageZoom: 1.2,
    actorCredit: 'Interpretado por Genilson',
    description:
      'Um dos pacientes infectados pelo vírus. Seu caso representa os efeitos da contaminação e contribui para revelar a gravidade da situação enfrentada pela cidade.',
  },
  {
    name: 'Paciente',
    image: paciente03PersonagemImage,
    imagePosition: '52% 32%',
    imageZoom: 1.15,
    actorCredit: 'Interpretado por Marlon Állex',
    description:
      'Paciente que vai ao postinho de saúde para uma consulta comum, como qualquer outro cidadão de Oleandro, sem nenhuma relação com a infecção que começa a se espalhar pela cidade.',
  },
  {
    name: 'Amigo de Felipe',
    image: amigodefelipePersonagemImage,
    imagePosition: '52% 33%',
    imageZoom: 1.2,
    actorCredit: 'Interpretado por Maycon',
    description:
      'Amigo próximo de Felipe e peça fundamental para compreender o que aconteceu com ele. Suas informações podem ajudar Osmar a seguir pistas importantes na busca pelo irmão desaparecido.',
  },
  {
    name: 'Esposa de Thomas',
    image: maedeesposadethomasPersonagemImage,
    imagePosition: '48% 27%',
    imageZoom: 1.15,
    actorCredit: 'Interpretada por Luciene Souza',
    description:
      'Esposa de Thomas, ela faz parte do núcleo familiar do ex-prefeito e acompanha, de diferentes maneiras, os acontecimentos que envolvem sua família e os planos do marido.',
  },
  {
    name: 'Ângela',
    image: angelaPersonagemImage,
    imagePosition: '52% 26%',
    imageZoom: 1.2,
    actorCredit: 'Interpretada por Luciana',
    description:
      'Ângela é funcionária que cuida da casa de Thomas e é cheia de fofoca sobre o ex-prefeito e sua família.',
  },
  {
    name: 'Geralda',
    image: geraldaPersonagemImage,
    imagePosition: '59% 28%',
    imageZoom: 1.25,
    actorCredit: 'Interpretada por Adriana',
    description:
      'Geralda também é funcionária que cuida da casa de Thomas e é amiga de Ângela.',
  },
  {
    name: 'Aluna 01',
    image: aluna01PersonagemImage,
    imagePosition: '50% 36%',
    imageZoom: 1.2,
    actorCredit: 'Interpretada por Agatha',
    description:
      'Estudante que participa do núcleo escolar.',
  },
  {
    name: 'Aluna 02',
    image: aluna02PersonagemImage,
    imagePosition: '49% 30%',
    imageZoom: 1.2,
    actorCredit: 'Interpretada por Beatriz',
    description:
      'Estudante que também participa do núcleo escolar.',
  },
  {
    name: 'Aluno 03',
    image: aluno03PersonagemImage,
    imagePosition: '54% 32%',
    imageZoom: 1.2,
    actorCredit: 'Interpretado por Yuri Rodrigues',
    description: 'É um estudante do núcleo escolar.',
  },
  {
    name: 'Thiago',
    image: thiagoPersonagemImage,
    imagePosition: '49% 29%',
    imageZoom: 1.2,
    actorCredit: 'Interpretado por Luan',
    description: 'Thiago é amigo de Pedro.',
  },
  {
    name: 'Clara',
    image: claraPersonagemImage,
    imagePosition: '59% 28%',
    imageZoom: 1.2,
    actorCredit: 'Interpretada por Lilian',
    description: 'Clara é professora.',
  },
  {
    name: 'Antônio',
    image: antonioPersonagemImage,
    imagePosition: '40% 36%',
    imageZoom: 1.15,
    actorCredit: 'Interpretado por Matheus',
    description: 'Antônio é amigo de Pedro e Thiago.',
  },
  {
    name: 'Pedro',
    image: pedroPersonagemImage,
    imagePosition: '46% 32%',
    imageZoom: 1.2,
    actorCredit: 'Interpretado por Lourran',
    description: 'Pedro é irmão de Rebeca e filho de Thomas.',
  },
  {
    name: 'Protestante 01',
    image: protestante01PersonagemImage,
    imagePosition: '68% 29%',
    imageZoom: 1.2,
    actorCredit: 'Interpretada por Brenda',
    description: 'Está no protesto junto com o estudante Arthur.',
  },
  {
    name: 'Protestante 02',
    image: protestante02PersonagemImage,
    imagePosition: '53% 44%',
    imageZoom: 1.15,
    actorCredit: 'Interpretada por Marcilene',
    description: 'Está no protesto junto com o estudante Arthur.',
  },
  {
    name: 'Protestante 03',
    image: protestante03PersonagemImage,
    imagePosition: '52% 44%',
    imageZoom: 1.15,
    actorCredit: 'Interpretado por Sampaio',
    description: 'Está no protesto junto com o estudante Arthur.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'A Fronteira em Chamas',
    location: 'Perímetro Sul de Oleandro',
    description: 'A cortina de fumaça que cobriu o sol e iniciou a migração desordenada da fauna.',
    image: heroImage,
  },
  {
    id: 'g2',
    title: 'O Desaparecimento de Felipe',
    location: 'Serra Vermelha, Caatinga Profunda',
    description: 'O último registro visual do pesquisador Felipe antes de perder contato.',
    image: felipeImage,
  },
  {
    id: 'g3',
    title: 'Esporos em Quarentena',
    location: 'Laboratório de Campanha',
    description: 'Análise microscópica da reação fúngica que floresce nas cinzas da mata.',
    image: infectionImage,
  },
];

// Mosaico de fotos reais de produção/bastidores, exibido em grid na Galeria
export const GALLERY_PHOTOS: string[] = [
  producao01,
  producao02,
  producao03,
  producao04,
  producao05,
  producao06,
  producao07,
  producao08,
  producao09,
  producao10,
  producao11,
  producao12,
  producao13,
  producao14,
  producao15,
  producao16,
  producao17,
  producao18,
  producao19,
  producao20,
  producao21,
  producao22,
  producao23,
  producao24,
  producao26,
  producao27,
  producao29,
  producao30,
  producao31,
  producao32,
  producao33,
  producao34,
];

export const ABOUT_TEXT = {
  synopsisLong:
    'Em Oleandro, uma pacata cidade encravada no coração do sertão e cercada pela densa Caatinga, o equilíbrio milenar é quebrado quando queimadas ilegais e desmatamentos predatórios avançam sobre áreas protegidas. O que parecia apenas mais um crime ambiental se desdobra em pesadelo quando animais em comportamento frenético invadem a área urbana, trazendo consigo uma misteriosa infecção dormente que se alastra pelo ar quente. Enquanto o medo consome a população, Osmar parte em uma corrida contra o tempo pela mata cinzenta para resgatar seu irmão Felipe, desvendando conspirações de poderosos locais e encarando uma força primitiva que decidiu reagir.',
  themes: [
    {
      title: 'A Caatinga é Única no Mundo',
      desc: 'É o único bioma 100% brasileiro — não existe em nenhum outro país. Ocupa cerca de 844 mil km² (10% do território nacional) e é lar de mais de 32 milhões de pessoas.',
    },
    {
      title: 'O Fogo Fora de Controle',
      desc: 'Em 2025, enquanto o Brasil reduziu as queimadas, a Caatinga foi o único bioma onde a área queimada aumentou — um ecossistema onde o fogo não ocorre naturalmente.',
    },
    {
      title: 'Um Bioma em Risco',
      desc: 'O Brasil já perdeu 34 milhões dos 82,6 milhões de hectares originais de Caatinga — mais de 40% da vegetação nativa já foi devastada.',
    },
  ],
  technicalInfo: {
    direcao: 'Produção Independente de Alto Impacto',
    locacoes: 'Semiárido Nordestino / Sertão Real',
    fotografia: 'Lentes anamórficas com iluminação natural em crepúsculo e chamas',
    anoLancamento: '2026',
    classificacao: '12 Anos (Contém tensão, suspense e temática ambiental)',
  },
};
