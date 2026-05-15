import type {
  Accommodation,
  AnyTagged,
  Collaborateur,
  Continent,
  Destination,
  EntityByKind,
  EntityKind,
  Experience,
  Service,
  ServiceCategory,
  Subtheme,
  Theme,
} from "./types";

import { destination as corse } from "@/content/destinations/corse";
import { destination as bajaCalifornia } from "@/content/destinations/baja-california";
import { destination as darEsSalaam } from "@/content/destinations/dar-es-salaam";
import { destination as hokkaido } from "@/content/destinations/hokkaido";
import { destination as kyoto } from "@/content/destinations/kyoto";
import { destination as losCabos } from "@/content/destinations/los-cabos";
import { destination as polynesie } from "@/content/destinations/polynesie";
import { destination as polynesieOld } from "@/content/destinations/polynesie-old";
import { destination as polynesie2 } from "@/content/destinations/polynesie-2";
import { destination as marrakech } from "@/content/destinations/marrakech";
import { destination as paris } from "@/content/destinations/paris";
import { destination as rioDeJaneiro } from "@/content/destinations/rio-de-janeiro";
import { destination as japon } from "@/content/destinations/japon";
import { destination as rome } from "@/content/destinations/rome";
import { destination as mexique } from "@/content/destinations/mexique";
import { destination as oaxaca } from "@/content/destinations/oaxaca";
import { destination as ruaha } from "@/content/destinations/ruaha";
import { destination as tanzanie } from "@/content/destinations/tanzanie";
import { destination as tohoku } from "@/content/destinations/tohoku";
import { destination as yucatan } from "@/content/destinations/yucatan";
import { destination as zanzibar } from "@/content/destinations/zanzibar";

import { continent as europe } from "@/content/continents/europe";
import { continent as afrique } from "@/content/continents/afrique";
import { continent as asie } from "@/content/continents/asie";
import { continent as ameriques } from "@/content/continents/ameriques";
import { continent as procheOrient } from "@/content/continents/proche-orient";
import { continent as ilesOceanie } from "@/content/continents/iles-oceanie";

import { theme as bienEtre } from "@/content/themes/bien-etre";
import { theme as skiMontagne } from "@/content/themes/ski-montagne";
import { theme as plongee } from "@/content/themes/plongee";
import { theme as gastronomie } from "@/content/themes/gastronomie";
import { theme as safarisAventure } from "@/content/themes/safaris-aventure";
import { theme as cultureVisites } from "@/content/themes/culture-visites";
import { theme as croisiere } from "@/content/themes/croisiere";

import { serviceCategory as mobilite } from "@/content/service-categories/mobilite";
import { serviceCategory as lifestyle } from "@/content/service-categories/lifestyle";
import { serviceCategory as conciergerie } from "@/content/service-categories/conciergerie";
import { serviceCategory as securite } from "@/content/service-categories/securite";
import { serviceCategory as ingenierie } from "@/content/service-categories/ingenierie";

import { experience as pecheMoorea } from "@/content/experiences/peche-moorea";
import { experience as nickTetautiare } from "@/content/experiences/nick-tetautiare";
import { experience as hammamDarElBacha } from "@/content/experiences/hammam-dar-el-bacha";
import { experience as lagonMoorea } from "@/content/experiences/lagon-moorea";
import { experience as cuisinePalaisBahia } from "@/content/experiences/cuisine-palais-bahia";
import { experience as gr20 } from "@/content/experiences/gr20";
import { experience as escapadeTodosSantos } from "@/content/experiences/escapade-todos-santos";
import { experience as lavezzi } from "@/content/experiences/lavezzi";
import { experience as vinCorse } from "@/content/experiences/vin-corse";
import { experience as rungisChef } from "@/content/experiences/rungis-chef";
import { experience as survolAtlasBiplan } from "@/content/experiences/survol-atlas-biplan";
import { experience as atelierLesage } from "@/content/experiences/atelier-lesage";
import { experience as louvrePriveNocturne } from "@/content/experiences/louvre-prive-nocturne";
import { experience as galerieBorghesePrive } from "@/content/experiences/galerie-borghese-prive";
import { experience as nonnaCuisineTrastevere } from "@/content/experiences/nonna-cuisine-trastevere";
import { experience as viaAppiaVespa } from "@/content/experiences/via-appia-vespa";
import { experience as atelierSambaMangueira } from "@/content/experiences/atelier-samba-mangueira";
import { experience as corcovadoAubePaineiras } from "@/content/experiences/corcovado-aube-paineiras";
import { experience as atelierLaqueWajima } from "@/content/experiences/atelier-laque-wajima";
import { experience as artisanatSamouraiSeki } from "@/content/experiences/artisanat-samourai-seki";
import { experience as dashiChefHarada } from "@/content/experiences/dashi-chef-harada";
import { experience as dormirEtoilesNyerere } from "@/content/experiences/dormir-etoiles-nyerere";
import { experience as journeeHadzabe } from "@/content/experiences/journee-hadzabe";
import { experience as ilesCagarrasPecheur } from "@/content/experiences/iles-cagarras-pecheur";
import { experience as leverSoleilXochimilco } from "@/content/experiences/lever-soleil-xochimilco";
import { experience as mezcalPlanteVerreMerida } from "@/content/experiences/mezcal-plante-verre-merida";
import { experience as rencontreBaleinGriseBaja } from "@/content/experiences/rencontre-baleine-grise-baja";
import { experience as soireeBioluminescentePuntaCoco } from "@/content/experiences/soiree-bioluminescente-punta-coco";
import { experience as nuitKoyasan } from "@/content/experiences/nuit-koyasan";
import { experience as plongeeCaboPulmo } from "@/content/experiences/plongee-cabo-pulmo";
import { experience as randonneeKumanoKodo } from "@/content/experiences/randonnee-kumano-kodo";
import { experience as ryoteiKagaKaiseki } from "@/content/experiences/ryotei-kaga-kaiseki";
import { experience as safariMontgolfierSerengeti } from "@/content/experiences/safari-montgolfiere-serengeti";
import { experience as snorkelingLionsMerEspirituSanto } from "@/content/experiences/snorkeling-lions-mer-espiritu-santo";
import { experience as trekkingChimpanzesMahale } from "@/content/experiences/trekking-chimpanzes-mahale";
import { experience as ukaiGifu } from "@/content/experiences/ukai-gifu";
import { experience as wineOClockValleGuadalupe } from "@/content/experiences/wine-oclock-valle-guadalupe";

import { accommodation as beyondNgorongoroCraterLodge } from "@/content/accommodations/beyond-ngorongoro-crater-lodge";
import { accommodation as chableYucatan } from "@/content/accommodations/chable-yucatan";
import { accommodation as chilenoBayAuberge } from "@/content/accommodations/chileno-bay-auberge";
import { accommodation as esencia } from "@/content/accommodations/esencia";
import { accommodation as habitasBacalar } from "@/content/accommodations/habitas-bacalar";
import { accommodation as theBrando } from "@/content/accommodations/the-brando";
import { accommodation as leTahaa } from "@/content/accommodations/le-tahaa";
import { accommodation as singitaSerengetiHouse } from "@/content/accommodations/singita-serengeti-house";
import { accommodation as stRegisBoraBora } from "@/content/accommodations/st-regis-bora-bora";
import { accommodation as tarangireTreetopsElewana } from "@/content/accommodations/tarangire-treetops-elewana";
import { accommodation as murtoli } from "@/content/accommodations/murtoli";
import { accommodation as royalMansour } from "@/content/accommodations/royal-mansour";
import { accommodation as casadelmar } from "@/content/accommodations/casadelmar";
import { accommodation as darAhlam } from "@/content/accommodations/dar-ahlam";
import { accommodation as amanjena } from "@/content/accommodations/amanjena";
import { accommodation as calaRossa } from "@/content/accommodations/cala-rossa";
import { accommodation as leBristol } from "@/content/accommodations/le-bristol";
import { accommodation as chevalBlancParis } from "@/content/accommodations/cheval-blanc-paris";
import { accommodation as lhotelParis } from "@/content/accommodations/lhotel-paris";
import { accommodation as hotelDeRussie } from "@/content/accommodations/hotel-de-russie";
import { accommodation as oneAndOnlyPalmilla } from "@/content/accommodations/one-and-only-palmilla";
import { accommodation as jKPlaceRoma } from "@/content/accommodations/j-k-place-roma";
import { accommodation as hasslerRoma } from "@/content/accommodations/hassler-roma";
import { accommodation as belmondCopacabanaPalace } from "@/content/accommodations/belmond-copacabana-palace";
import { accommodation as fasanoRio } from "@/content/accommodations/fasano-rio";
import { accommodation as fourSeasonsLosCabos } from "@/content/accommodations/four-seasons-los-cabos";
import { accommodation as amanKyoto } from "@/content/accommodations/aman-kyoto";
import { accommodation as beniyaMukayu } from "@/content/accommodations/beniya-mukayu";
import { accommodation as patinaOsaka } from "@/content/accommodations/patina-osaka";
import { accommodation as hotelSantaTeresa } from "@/content/accommodations/hotel-santa-teresa";

import { collaborateur as antoine } from "@/content/collaborateurs/antoine";
import { collaborateur as elise } from "@/content/collaborateurs/elise";
import { collaborateur as stephane } from "@/content/collaborateurs/stephane";

const toMap = <T extends { slug: string }>(items: T[]): Record<string, T> =>
  Object.fromEntries(items.map((i) => [i.slug, i]));

export const destinations: Record<string, Destination> = toMap([
  bajaCalifornia,
  corse,
  darEsSalaam,
  hokkaido,
  japon,
  kyoto,
  losCabos,
  marrakech,
  paris,
  polynesie,
  polynesie2,
  polynesieOld,
  mexique,
  oaxaca,
  rioDeJaneiro,
  rome,
  ruaha,
  tanzanie,
  tohoku,
  yucatan,
  zanzibar,
]);

export const continents: Record<string, Continent> = toMap([
  europe,
  afrique,
  asie,
  ameriques,
  procheOrient,
  ilesOceanie,
]);

export const themes: Record<string, Theme> = toMap([
  bienEtre,
  skiMontagne,
  plongee,
  gastronomie,
  safarisAventure,
  cultureVisites,
  croisiere,
]);

export const subthemes: Record<string, Subtheme> = toMap([]);

export const experiences: Record<string, Experience> = toMap([
  atelierLaqueWajima,
  atelierLesage,
  atelierSambaMangueira,
  artisanatSamouraiSeki,
  corcovadoAubePaineiras,
  cuisinePalaisBahia,
  dashiChefHarada,
  dormirEtoilesNyerere,
  escapadeTodosSantos,
  galerieBorghesePrive,
  gr20,
  hammamDarElBacha,
  ilesCagarrasPecheur,
  journeeHadzabe,
  lagonMoorea,
  leverSoleilXochimilco,
  lavezzi,
  louvrePriveNocturne,
  nickTetautiare,
  nonnaCuisineTrastevere,
  nuitKoyasan,
  pecheMoorea,
  plongeeCaboPulmo,
  randonneeKumanoKodo,
  rungisChef,
  mezcalPlanteVerreMerida,
  rencontreBaleinGriseBaja,
  ryoteiKagaKaiseki,
  safariMontgolfierSerengeti,
  snorkelingLionsMerEspirituSanto,
  soireeBioluminescentePuntaCoco,
  survolAtlasBiplan,
  trekkingChimpanzesMahale,
  ukaiGifu,
  viaAppiaVespa,
  vinCorse,
  wineOClockValleGuadalupe,
]);

export const serviceCategories: Record<string, ServiceCategory> = toMap([
  mobilite,
  lifestyle,
  conciergerie,
  securite,
  ingenierie,
]);

export const services: Record<string, Service> = toMap([]);

export const accommodations: Record<string, Accommodation> = toMap([
  amanjena,
  amanKyoto,
  beniyaMukayu,
  beyondNgorongoroCraterLodge,
  chableYucatan,
  chilenoBayAuberge,
  esencia,
  fourSeasonsLosCabos,
  habitasBacalar,
  patinaOsaka,
  belmondCopacabanaPalace,
  calaRossa,
  casadelmar,
  chevalBlancParis,
  darAhlam,
  fasanoRio,
  hasslerRoma,
  hotelDeRussie,
  hotelSantaTeresa,
  oneAndOnlyPalmilla,
  jKPlaceRoma,
  leBristol,
  leTahaa,
  lhotelParis,
  murtoli,
  royalMansour,
  singitaSerengetiHouse,
  stRegisBoraBora,
  tarangireTreetopsElewana,
  theBrando,
]);

export const collaborateurs: Record<string, Collaborateur> = toMap([
  antoine,
  elise,
  stephane,
]);

const buckets: { [K in EntityKind]: Record<string, EntityByKind[K]> } = {
  continent: continents,
  destination: destinations,
  theme: themes,
  subtheme: subthemes,
  experience: experiences,
  serviceCategory: serviceCategories,
  service: services,
  accommodation: accommodations,
};

export function getEntity<K extends EntityKind>(
  kind: K,
  slug: string,
): EntityByKind[K] | undefined {
  return buckets[kind][slug];
}

export function listEntities<K extends EntityKind>(
  kind: K,
): EntityByKind[K][] {
  return Object.values(buckets[kind]);
}

export const allTagged: AnyTagged[] = (Object.entries(buckets) as [
  EntityKind,
  Record<string, EntityByKind[EntityKind]>,
][]).flatMap(([kind, map]) =>
  Object.values(map).map(
    (entity) => ({ kind, entity }) as AnyTagged,
  ),
);
