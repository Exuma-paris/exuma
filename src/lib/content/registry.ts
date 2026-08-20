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
import { destination as polynesie } from "@/content/destinations/polynesie";
import { destination as polynesieOld } from "@/content/destinations/polynesie-old";
import { destination as polynesie2 } from "@/content/destinations/polynesie-2";
import { destination as marrakech } from "@/content/destinations/marrakech";
import { destination as oman } from "@/content/destinations/oman";
import { destination as paris } from "@/content/destinations/paris";
import { destination as paysBas } from "@/content/destinations/pays-bas";
import { destination as rioDeJaneiro } from "@/content/destinations/rio-de-janeiro";
import { destination as rome } from "@/content/destinations/rome";
import { destination as seychelles } from "@/content/destinations/seychelles";
import { destination as kenya } from "@/content/destinations/kenya";
import { destination as maurice } from "@/content/destinations/maurice";
import { destination as tanzanie } from "@/content/destinations/tanzanie";
import { destination as botswana } from "@/content/destinations/botswana";
import { destination as namibie } from "@/content/destinations/namibie";
import { destination as egypte } from "@/content/destinations/egypte";
import { destination as indonesie } from "@/content/destinations/indonesie";
import { destination as costaRica } from "@/content/destinations/costa-rica";
import { destination as afriqueDuSud } from "@/content/destinations/afrique-du-sud";
import { destination as thailande } from "@/content/destinations/thailande";
import { destination as jordanie } from "@/content/destinations/jordanie";
import { destination as norvege } from "@/content/destinations/norvege";
import { destination as islande } from "@/content/destinations/islande";
import { destination as irlande } from "@/content/destinations/irlande";
import { destination as ecosse } from "@/content/destinations/ecosse";

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
import { experience as croisiereIlotBenitiers } from "@/content/experiences/croisiere-ilot-benitiers";
import { experience as golfParadisMorne } from "@/content/experiences/golf-paradis-morne";
import { experience as dinerLadyLisbeth } from "@/content/experiences/diner-lady-lisbeth";
import { experience as olduvaiPaleoanthropologue } from "@/content/experiences/olduvai-paleoanthropologue";
import { experience as aubeHadzabeLacEyasi } from "@/content/experiences/aube-hadzabe-lac-eyasi";
import { experience as flyCampKopjesGrumeti } from "@/content/experiences/fly-camp-kopjes-grumeti";
import { experience as navigationCanauxOkavango } from "@/content/experiences/navigation-canaux-okavango";
import { experience as marcheBushmenSan } from "@/content/experiences/marche-bushmen-san";
import { experience as safariNocturneProjecteur } from "@/content/experiences/safari-nocturne-projecteur";
import { experience as echappeeSkeletonCoast } from "@/content/experiences/echappee-skeleton-coast";
import { experience as parcNamibNaukluft } from "@/content/experiences/parc-namib-naukluft";
import { experience as sossusvleiDeadvlei } from "@/content/experiences/sossusvlei-deadvlei";
import { experience as valleeRoisTombesFermees } from "@/content/experiences/vallee-rois-tombes-fermees";
import { experience as montgolfiereNecropoleThebaine } from "@/content/experiences/montgolfiere-necropole-thebaine";
import { experience as rijksmuseumAvantOuverture } from "@/content/experiences/rijksmuseum-avant-ouverture";
import { experience as mauritshuisVermeerDelft } from "@/content/experiences/mauritshuis-vermeer-delft";
import { experience as crieeAalsmeerAube } from "@/content/experiences/criee-aalsmeer-aube";
import { experience as siwaCampementDesert } from "@/content/experiences/siwa-campement-desert";
import { experience as ascensionMontBromo } from "@/content/experiences/ascension-mont-bromo";
import { experience as tirtaEmpulForetSinges } from "@/content/experiences/tirta-empul-foret-singes";
import { experience as lagonWeekuriSumba } from "@/content/experiences/lagon-weekuri-sumba";
import { experience as ponteTortuesVertes } from "@/content/experiences/ponte-tortues-vertes";
import { experience as reserveNectandra } from "@/content/experiences/reserve-nectandra";
import { experience as refugeCuru } from "@/content/experiences/refuge-curu";
import { experience as colonieManchotsBoulders } from "@/content/experiences/colonie-manchots-boulders";
import { experience as marchePistageThornybush } from "@/content/experiences/marche-pistage-thornybush";
import { experience as volHelicoptereMpumalanga } from "@/content/experiences/vol-helicoptere-mpumalanga";
import { experience as watPhoChantsMoines } from "@/content/experiences/wat-pho-chants-moines";
import { experience as coursCuisineBlueElephant } from "@/content/experiences/cours-cuisine-blue-elephant";
import { experience as khaoYaiHeowSuwat } from "@/content/experiences/khao-yai-heow-suwat";
import { experience as ilesDaymaniyatSnorkeling } from "@/content/experiences/iles-daymaniyat-snorkeling";
import { experience as nizwaBahlaJabreen } from "@/content/experiences/nizwa-bahla-jabreen";
import { experience as wadiBaniKhalid } from "@/content/experiences/wadi-bani-khalid";
import { experience as wadiRum4x4Campement } from "@/content/experiences/wadi-rum-4x4-campement";
import { experience as observationEtoilesWadiRum } from "@/content/experiences/observation-etoiles-wadi-rum";
import { experience as plongeeMerRougeAqaba } from "@/content/experiences/plongee-mer-rouge-aqaba";
import { experience as pecheSkreiLofoten } from "@/content/experiences/peche-skrei-lofoten";
import { experience as reinefjordMoskenstraumen } from "@/content/experiences/reinefjord-moskenstraumen";
import { experience as skiVoileSunnmore } from "@/content/experiences/ski-voile-sunnmore";
import { experience as ilesWestmanEldfell } from "@/content/experiences/iles-westman-eldfell";
import { experience as kayakPaddleThorsmork } from "@/content/experiences/kayak-paddle-thorsmork";
import { experience as observationBaleinesIslande } from "@/content/experiences/observation-baleines-islande";
import { experience as midletonMaitreDistillateur } from "@/content/experiences/midleton-maitre-distillateur";
import { experience as fauconnerieAshford } from "@/content/experiences/fauconnerie-ashford";
import { experience as oldHeadKinsale } from "@/content/experiences/old-head-kinsale";
import { experience as chateauFloors } from "@/content/experiences/chateau-floors";
import { experience as pecheMoucheSkye } from "@/content/experiences/peche-mouche-skye";
import { experience as linksEastLothian } from "@/content/experiences/links-east-lothian";

import { accommodation as theBrando } from "@/content/accommodations/the-brando";
import { accommodation as leTahaa } from "@/content/accommodations/le-tahaa";
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
import { accommodation as royalPalmBeachcomber } from "@/content/accommodations/royal-palm-beachcomber";
import { accommodation as vingtDegresSud } from "@/content/accommodations/20-degres-sud";
import { accommodation as luxLeMorne } from "@/content/accommodations/lux-le-morne";
import { accommodation as grumetiSerengetiRiverLodge } from "@/content/accommodations/grumeti-serengeti-river-lodge";
import { accommodation as singitaSasakwaLodge } from "@/content/accommodations/singita-sasakwa-lodge";
import { accommodation as labaMamaSimba } from "@/content/accommodations/laba-mama-simba";
import { accommodation as eagleIslandLodge } from "@/content/accommodations/eagle-island-lodge";
import { accommodation as tawana } from "@/content/accommodations/tawana";
import { accommodation as jacksCamp } from "@/content/accommodations/jacks-camp";
import { accommodation as sossusvleiDesertLodge } from "@/content/accommodations/sossusvlei-desert-lodge";
import { accommodation as zannierSonop } from "@/content/accommodations/zannier-sonop";
import { accommodation as hoanibSkeletonCoastCamp } from "@/content/accommodations/hoanib-skeleton-coast-camp";
import { accommodation as oldCataractAssouan } from "@/content/accommodations/old-cataract-assouan";
import { accommodation as deLEuropeAmsterdam } from "@/content/accommodations/de-l-europe-amsterdam";
import { accommodation as roodeKoperVeluwe } from "@/content/accommodations/roode-koper-veluwe";
import { accommodation as chateauStGerlach } from "@/content/accommodations/chateau-st-gerlach";
import { accommodation as alMoudiraLouxor } from "@/content/accommodations/al-moudira-louxor";
import { accommodation as dahabiehPrivatiseeNil } from "@/content/accommodations/dahabieh-privatisee-nil";
import { accommodation as amankila } from "@/content/accommodations/amankila";
import { accommodation as nihiSumba } from "@/content/accommodations/nihi-sumba";
import { accommodation as fourSeasonsJakarta } from "@/content/accommodations/four-seasons-jakarta";
import { accommodation as nantipa } from "@/content/accommodations/nantipa";
import { accommodation as pashaSantaTeresa } from "@/content/accommodations/pasha-santa-teresa";
import { accommodation as fourSeasonsPapagayo } from "@/content/accommodations/four-seasons-papagayo";
import { accommodation as ellermanHouse } from "@/content/accommodations/ellerman-house";
import { accommodation as bushmansKloof } from "@/content/accommodations/bushmans-kloof";
import { accommodation as sasekaTentedCamp } from "@/content/accommodations/saseka-tented-camp";
import { accommodation as amanpuri } from "@/content/accommodations/amanpuri";
import { accommodation as sixSensesYaoNoi } from "@/content/accommodations/six-senses-yao-noi";
import { accommodation as dusitThaniBangkok } from "@/content/accommodations/dusit-thani-bangkok";
import { accommodation as anantaraAlJabalAlAkhdar } from "@/content/accommodations/anantara-al-jabal-al-akhdar";
import { accommodation as theChediMuscat } from "@/content/accommodations/the-chedi-muscat";
import { accommodation as magicCampsWahibaSands } from "@/content/accommodations/magic-camps-wahiba-sands";
import { accommodation as kempinskiIshtarDeadSea } from "@/content/accommodations/kempinski-ishtar-dead-sea";
import { accommodation as movenpickResortPetra } from "@/content/accommodations/movenpick-resort-petra";
import { accommodation as fourSeasonsAmman } from "@/content/accommodations/four-seasons-amman";
import { accommodation as holmenLofoten } from "@/content/accommodations/holmen-lofoten";
import { accommodation as juvetLandskapshotell } from "@/content/accommodations/juvet-landskapshotell";
import { accommodation as umiHotel } from "@/content/accommodations/umi-hotel";
import { accommodation as skalakot } from "@/content/accommodations/skalakot";
import { accommodation as hotelJokulsarlon } from "@/content/accommodations/hotel-jokulsarlon";
import { accommodation as ashfordCastle } from "@/content/accommodations/ashford-castle";
import { accommodation as adareManor } from "@/content/accommodations/adare-manor";
import { accommodation as cliffHouseArdmore } from "@/content/accommodations/cliff-house-ardmore";
import { accommodation as royalScotsman } from "@/content/accommodations/royal-scotsman";
import { accommodation as schlossRoxburghe } from "@/content/accommodations/schloss-roxburghe";
import { accommodation as princesStreet100 } from "@/content/accommodations/100-princes-street";
// Svart (src/content/accommodations/svart.tsx) reste volontairement hors
// registre tant que la date d'ouverture n'est pas connue.

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
  afriqueDuSud,
  botswana,
  corse,
  costaRica,
  ecosse,
  egypte,
  indonesie,
  irlande,
  islande,
  jordanie,
  marrakech,
  maurice,
  namibie,
  norvege,
  oman,
  paris,
  paysBas,
  polynesie,
  polynesie2,
  polynesieOld,
  rioDeJaneiro,
  rome,
  seychelles,
  kenya,
  tanzanie,
  thailande,
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
  ascensionMontBromo,
  atelierLesage,
  atelierSambaMangueira,
  aubeHadzabeLacEyasi,
  chateauFloors,
  corcovadoAubePaineiras,
  colonieManchotsBoulders,
  coucherSoleilGranit,
  coursCuisineBlueElephant,
  crieeAalsmeerAube,
  croisiereIlotBenitiers,
  cuisinePalaisBahia,
  decouverteIlesBateauSeychelles,
  dinerLadyLisbeth,
  echappeeSkeletonCoast,
  eclosionTortuesSeychelles,
  flyCampKopjesGrumeti,
  golfParadisMorne,
  galerieBorghesePrive,
  gr20,
  hammamDarElBacha,
  ilesCagarrasPecheur,
  ilesDaymaniyatSnorkeling,
  fauconnerieAshford,
  ilesWestmanEldfell,
  kayakPaddleThorsmork,
  khaoYaiHeowSuwat,
  lagonWeekuriSumba,
  sablesSecretsRio,
  soireeBossaNovaIpanema,
  lagonMoorea,
  lavezzi,
  linksEastLothian,
  louvrePriveNocturne,
  marcheBushmenSan,
  midletonMaitreDistillateur,
  marchePistageThornybush,
  mauritshuisVermeerDelft,
  montgolfiereNecropoleThebaine,
  navigationCanauxOkavango,
  nickTetautiare,
  nizwaBahlaJabreen,
  nonnaCuisineTrastevere,
  oldHeadKinsale,
  observationBaleinesIslande,
  observationEtoilesWadiRum,
  olduvaiPaleoanthropologue,
  parcNamibNaukluft,
  pecheMoorea,
  pecheMoucheSkye,
  pecheSkreiLofoten,
  plongeeMerRougeAqaba,
  ponteTortuesVertes,
  refugeCuru,
  reinefjordMoskenstraumen,
  reserveNectandra,
  rijksmuseumAvantOuverture,
  rungisChef,
  safariNocturneProjecteur,
  skiVoileSunnmore,
  siwaCampementDesert,
  sossusvleiDeadvlei,
  survolAtlasBiplan,
  tirtaEmpulForetSinges,
  valleeRoisTombesFermees,
  viaAppiaVespa,
  vinCorse,
  wadiBaniKhalid,
  wadiRum4x4Campement,
  volHelicoptereMpumalanga,
  volHelicoptereSeychelles,
  watPhoChantsMoines,
  safariMontgolfiereMara,
  croisiereBoutreMidaCreek,
  visiteSamburuOlMalo,
  museeKarenBlixenVoitures,
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
  alMoudiraLouxor,
  amanjena,
  adareManor,
  amankila,
  amanpuri,
  anantaraAlJabalAlAkhdar,
  ashfordCastle,
  belmondCopacabanaPalace,
  bushmansKloof,
  calaRossa,
  casadelmar,
  chateauStGerlach,
  chevalBlancParis,
  cliffHouseArdmore,
  dahabiehPrivatiseeNil,
  darAhlam,
  deLEuropeAmsterdam,
  dusitThaniBangkok,
  eagleIslandLodge,
  ellermanHouse,
  fasanoRio,
  fourSeasonsAmman,
  fourSeasonsJakarta,
  fourSeasonsMahe,
  fourSeasonsPapagayo,
  fregateIslandPrivate,
  grumetiSerengetiRiverLodge,
  hasslerRoma,
  hoanibSkeletonCoastCamp,
  holmenLofoten,
  hotelDeRussie,
  hotelJokulsarlon,
  hotelSantaTeresa,
  jacksCamp,
  jKPlaceRoma,
  juvetLandskapshotell,
  kempinskiIshtarDeadSea,
  labaMamaSimba,
  leBristol,
  leTahaa,
  lhotelParis,
  luxLeMorne,
  magicCampsWahibaSands,
  movenpickResortPetra,
  murtoli,
  nantipa,
  nihiSumba,
  northIsland,
  oldCataractAssouan,
  pashaSantaTeresa,
  princesStreet100,
  roodeKoperVeluwe,
  royalMansour,
  royalPalmBeachcomber,
  royalScotsman,
  sasekaTentedCamp,
  schlossRoxburghe,
  singitaSasakwaLodge,
  sixSensesYaoNoi,
  skalakot,
  sossusvleiDesertLodge,
  tawana,
  umiHotel,
  vingtDegresSud,
  zannierSonop,
  stRegisBoraBora,
  theBrando,
  theChediMuscat,
  giraffeManor,
  kinondoKwetu,
  richardsRiverCamp,
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
