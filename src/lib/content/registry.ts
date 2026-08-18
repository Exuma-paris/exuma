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

import { destination as colombie } from "@/content/destinations/colombie";
import { destination as corse } from "@/content/destinations/corse";
import { destination as grece } from "@/content/destinations/grece";
import { destination as japon } from "@/content/destinations/japon";
import { destination as polynesie } from "@/content/destinations/polynesie";
import { destination as marrakech } from "@/content/destinations/marrakech";
import { destination as paris } from "@/content/destinations/paris";
import { destination as republiqueDominicaine } from "@/content/destinations/republique-dominicaine";
import { destination as rioDeJaneiro } from "@/content/destinations/rio-de-janeiro";
import { destination as rome } from "@/content/destinations/rome";
import { destination as seychelles } from "@/content/destinations/seychelles";
import { destination as kenya } from "@/content/destinations/kenya";
import { destination as vietnam } from "@/content/destinations/vietnam";

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
import { experience as keikoSumoTokyo } from "@/content/experiences/keiko-sumo-tokyo";
import { experience as ceremonieTheNanzenji } from "@/content/experiences/ceremonie-the-nanzenji";
import { experience as kaisekiGeishaGion } from "@/content/experiences/kaiseki-geisha-gion";
import { experience as lagonMoorea } from "@/content/experiences/lagon-moorea";
import { experience as cuisinePalaisBahia } from "@/content/experiences/cuisine-palais-bahia";
import { experience as gr20 } from "@/content/experiences/gr20";
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
import { experience as ilesCagarrasPecheur } from "@/content/experiences/iles-cagarras-pecheur";
import { experience as soireeBossaNovaIpanema } from "@/content/experiences/soiree-bossa-nova-ipanema";
import { experience as sablesSecretsRio } from "@/content/experiences/sables-secrets-rio";
import { experience as coucherSoleilGranit } from "@/content/experiences/coucher-soleil-granit";
import { experience as volHelicoptereSeychelles } from "@/content/experiences/vol-helicoptere-seychelles";
import { experience as eclosionTortuesSeychelles } from "@/content/experiences/eclosion-tortues-seychelles";
import { experience as decouverteIlesBateauSeychelles } from "@/content/experiences/decouverte-iles-bateau-seychelles";
import { experience as safariMontgolfiereMara } from "@/content/experiences/safari-montgolfiere-mara";
import { experience as croisiereBoutreMidaCreek } from "@/content/experiences/croisiere-boutre-mida-creek";
import { experience as visiteSamburuOlMalo } from "@/content/experiences/visite-samburu-ol-malo";
import { experience as museeKarenBlixenVoitures } from "@/content/experiences/musee-karen-blixen-voitures";
import { experience as croisierePriveeCyclades } from "@/content/experiences/croisiere-privee-cyclades";
import { experience as acropoleHorsHeures } from "@/content/experiences/acropole-hors-heures";
import { experience as delphesGuideArcheologue } from "@/content/experiences/delphes-guide-archeologue";
import { experience as tableSantorinVigneron } from "@/content/experiences/table-santorin-vigneron";
import { experience as citeImperialeHueHistorien } from "@/content/experiences/cite-imperiale-hue-historien";
import { experience as trekkingRizieresSapa } from "@/content/experiences/trekking-rizieres-sapa";
import { experience as baleinesSamana } from "@/content/experiences/baleines-samana";
import { experience as losHaitisesBateau } from "@/content/experiences/los-haitises-bateau";
import { experience as cacaoHaciendaElvesia } from "@/content/experiences/cacao-hacienda-elvesia";
import { experience as dinerChefHanoi } from "@/content/experiences/diner-chef-hanoi";
import { experience as baleinesPacifiqueChoco } from "@/content/experiences/baleines-pacifique-choco";
import { experience as fincaCafeQuindio } from "@/content/experiences/finca-cafe-quindio";
import { experience as tayronaBateauPrive } from "@/content/experiences/tayrona-bateau-prive";

import { accommodation as theBrando } from "@/content/accommodations/the-brando";
import { accommodation as leTahaa } from "@/content/accommodations/le-tahaa";
import { accommodation as amanTokyo } from "@/content/accommodations/aman-tokyo";
import { accommodation as hoshinoyaKyoto } from "@/content/accommodations/hoshinoya-kyoto";
import { accommodation as hoshinoyaFuji } from "@/content/accommodations/hoshinoya-fuji";
import { accommodation as stRegisBoraBora } from "@/content/accommodations/st-regis-bora-bora";
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
import { accommodation as jKPlaceRoma } from "@/content/accommodations/j-k-place-roma";
import { accommodation as hasslerRoma } from "@/content/accommodations/hassler-roma";
import { accommodation as belmondCopacabanaPalace } from "@/content/accommodations/belmond-copacabana-palace";
import { accommodation as fasanoRio } from "@/content/accommodations/fasano-rio";
import { accommodation as hotelSantaTeresa } from "@/content/accommodations/hotel-santa-teresa";
import { accommodation as northIsland } from "@/content/accommodations/north-island";
import { accommodation as fregateIslandPrivate } from "@/content/accommodations/fregate-island-private";
import { accommodation as fourSeasonsMahe } from "@/content/accommodations/four-seasons-mahe";
import { accommodation as giraffeManor } from "@/content/accommodations/giraffe-manor";
import { accommodation as kinondoKwetu } from "@/content/accommodations/kinondo-kwetu";
import { accommodation as richardsRiverCamp } from "@/content/accommodations/richards-river-camp";
import { accommodation as amanzoe } from "@/content/accommodations/amanzoe";
import { accommodation as canavesOia } from "@/content/accommodations/canaves-oia";
import { accommodation as kalesmaMykonos } from "@/content/accommodations/kalesma-mykonos";
import { accommodation as amanoi } from "@/content/accommodations/amanoi";
import { accommodation as laResidenceHue } from "@/content/accommodations/la-residence-hue";
import { accommodation as sixSensesNinhVanBay } from "@/content/accommodations/six-senses-ninh-van-bay";
import { accommodation as amanera } from "@/content/accommodations/amanera";
import { accommodation as tortugaBay } from "@/content/accommodations/tortuga-bay";
import { accommodation as casaDeCampo } from "@/content/accommodations/casa-de-campo";
import { accommodation as casaSanAgustin } from "@/content/accommodations/casa-san-agustin";
import { accommodation as haciendaSanJose } from "@/content/accommodations/hacienda-san-jose";
import { accommodation as reservaNaturalPalmari } from "@/content/accommodations/reserva-natural-palmari";

import { collaborateur as aurore } from "@/content/collaborateurs/aurore";
import { collaborateur as blanche } from "@/content/collaborateurs/blanche";
import { collaborateur as calvin } from "@/content/collaborateurs/calvin";
import { collaborateur as carole } from "@/content/collaborateurs/carole";
import { collaborateur as cecile } from "@/content/collaborateurs/cecile";
import { collaborateur as ludivine } from "@/content/collaborateurs/ludivine";
import { collaborateur as rania } from "@/content/collaborateurs/rania";
import { collaborateur as stephane } from "@/content/collaborateurs/stephane";
import { collaborateur as taina } from "@/content/collaborateurs/taina";

const toMap = <T extends { slug: string }>(items: T[]): Record<string, T> =>
  Object.fromEntries(items.map((i) => [i.slug, i]));

export const destinations: Record<string, Destination> = toMap([
  colombie,
  corse,
  grece,
  japon,
  marrakech,
  paris,
  polynesie,
  republiqueDominicaine,
  rioDeJaneiro,
  rome,
  seychelles,
  kenya,
  vietnam,
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
  acropoleHorsHeures,
  atelierLesage,
  atelierSambaMangueira,
  baleinesPacifiqueChoco,
  ceremonieTheNanzenji,
  citeImperialeHueHistorien,
  corcovadoAubePaineiras,
  coucherSoleilGranit,
  croisierePriveeCyclades,
  cuisinePalaisBahia,
  decouverteIlesBateauSeychelles,
  delphesGuideArcheologue,
  dinerChefHanoi,
  eclosionTortuesSeychelles,
  fincaCafeQuindio,
  galerieBorghesePrive,
  gr20,
  hammamDarElBacha,
  ilesCagarrasPecheur,
  kaisekiGeishaGion,
  keikoSumoTokyo,
  sablesSecretsRio,
  soireeBossaNovaIpanema,
  lagonMoorea,
  lavezzi,
  louvrePriveNocturne,
  nickTetautiare,
  nonnaCuisineTrastevere,
  pecheMoorea,
  rungisChef,
  survolAtlasBiplan,
  tableSantorinVigneron,
  tayronaBateauPrive,
  viaAppiaVespa,
  vinCorse,
  volHelicoptereSeychelles,
  safariMontgolfiereMara,
  croisiereBoutreMidaCreek,
  visiteSamburuOlMalo,
  museeKarenBlixenVoitures,
  trekkingRizieresSapa,
  baleinesSamana,
  losHaitisesBateau,
  cacaoHaciendaElvesia,
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
  amanoi,
  amanTokyo,
  amanjena,
  amanzoe,
  belmondCopacabanaPalace,
  calaRossa,
  canavesOia,
  casadelmar,
  chevalBlancParis,
  darAhlam,
  fasanoRio,
  fourSeasonsMahe,
  fregateIslandPrivate,
  hasslerRoma,
  hotelDeRussie,
  hotelSantaTeresa,
  hoshinoyaFuji,
  hoshinoyaKyoto,
  jKPlaceRoma,
  kalesmaMykonos,
  laResidenceHue,
  leBristol,
  leTahaa,
  lhotelParis,
  murtoli,
  northIsland,
  royalMansour,
  sixSensesNinhVanBay,
  stRegisBoraBora,
  theBrando,
  giraffeManor,
  kinondoKwetu,
  richardsRiverCamp,
  amanera,
  tortugaBay,
  casaDeCampo,
  casaSanAgustin,
  haciendaSanJose,
  reservaNaturalPalmari,
]);

export const collaborateurs: Record<string, Collaborateur> = toMap([
  aurore,
  blanche,
  calvin,
  carole,
  cecile,
  ludivine,
  rania,
  stephane,
  taina,
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
