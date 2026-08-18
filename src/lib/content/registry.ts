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

import { destination as bresil } from "@/content/destinations/bresil";
import { destination as corse } from "@/content/destinations/corse";
import { destination as espagne } from "@/content/destinations/espagne";
import { destination as grece } from "@/content/destinations/grece";
import { destination as polynesie } from "@/content/destinations/polynesie";
import { destination as marrakech } from "@/content/destinations/marrakech";
import { destination as oman } from "@/content/destinations/oman";
import { destination as paris } from "@/content/destinations/paris";
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
import { destination as madere } from "@/content/destinations/madere";
import { destination as france } from "@/content/destinations/france";
import { destination as italie } from "@/content/destinations/italie";
import { destination as portugal } from "@/content/destinations/portugal";
import { destination as maldives } from "@/content/destinations/maldives";
import { destination as etatsUnis } from "@/content/destinations/etats-unis";
import { destination as suisse } from "@/content/destinations/suisse";
import { destination as emiratsArabesUnis } from "@/content/destinations/emirats-arabes-unis";
import { destination as mexique } from "@/content/destinations/mexique";
import { destination as turquie } from "@/content/destinations/turquie";
import { destination as canada } from "@/content/destinations/canada";
import { destination as autriche } from "@/content/destinations/autriche";
import { destination as argentine } from "@/content/destinations/argentine";

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
import { experience as croisierePriveeCyclades } from "@/content/experiences/croisiere-privee-cyclades";
import { experience as acropoleHorsHeures } from "@/content/experiences/acropole-hors-heures";
import { experience as delphesGuideArcheologue } from "@/content/experiences/delphes-guide-archeologue";
import { experience as tableSantorinVigneron } from "@/content/experiences/table-santorin-vigneron";
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
import { experience as foretFanal } from "@/content/experiences/foret-fanal";
import { experience as plageSeixal } from "@/content/experiences/plage-seixal";
import { experience as mercadoFunchal } from "@/content/experiences/mercado-funchal";
import { experience as degustationBlandys } from "@/content/experiences/degustation-blandys";
import { experience as baieMontSaintMichel } from "@/content/experiences/baie-mont-saint-michel";
import { experience as vinsClairsChampagne } from "@/content/experiences/vins-clairs-champagne";
import { experience as valleeBlancheMontBlanc } from "@/content/experiences/vallee-blanche-mont-blanc";
import { experience as pompeiHorsHeures } from "@/content/experiences/pompei-hors-heures";
import { experience as muranoMaitreVerrier } from "@/content/experiences/murano-maitre-verrier";
import { experience as truffeBlancheAlba } from "@/content/experiences/truffe-blanche-alba";
import { experience as viaFerrataIvanoDibona } from "@/content/experiences/via-ferrata-ivano-dibona";
import { experience as lagunesLencoisAube } from "@/content/experiences/lagunes-lencois-aube";
import { experience as iguacuChutesAube } from "@/content/experiences/iguacu-chutes-aube";
import { experience as saveiroBaieTousLesSaints } from "@/content/experiences/saveiro-baie-tous-les-saints";
import { experience as pistageJaguarsPantanal } from "@/content/experiences/pistage-jaguars-pantanal";
import { experience as chevalPlageComporta } from "@/content/experiences/cheval-plage-comporta";
import { experience as fadoChapelleAlfama } from "@/content/experiences/fado-chapelle-alfama";
import { experience as grottesPontaDaPiedade } from "@/content/experiences/grottes-ponta-da-piedade";
import { experience as dinerBancDeSableNoonu } from "@/content/experiences/diner-banc-de-sable-noonu";
import { experience as pecheDhoniCoucherSoleil } from "@/content/experiences/peche-dhoni-coucher-soleil";
import { experience as atelierCorailBiologiste } from "@/content/experiences/atelier-corail-biologiste";
import { experience as pistageCondorsBigSur } from "@/content/experiences/pistage-condors-big-sur";
import { experience as cabernetCulteNapa } from "@/content/experiences/cabernet-culte-napa";
import { experience as metAvantOuverture } from "@/content/experiences/met-avant-ouverture";
import { experience as atelierHorlogerValleeDeJoux } from "@/content/experiences/atelier-horloger-vallee-de-joux";
import { experience as aubeBarqueOeschinensee } from "@/content/experiences/aube-barque-oeschinensee";
import { experience as berninaExpressWagonPrive } from "@/content/experiences/bernina-express-wagon-prive";
import { experience as lipizzansHofreitschule } from "@/content/experiences/lipizzans-hofreitschule";
import { experience as wachauRieslingDurnstein } from "@/content/experiences/wachau-riesling-durnstein";
import { experience as arlbergPeauDePhoque } from "@/content/experiences/arlberg-peau-de-phoque";
import { experience as txokoSanSebastian } from "@/content/experiences/txoko-san-sebastian";
import { experience as chevauxCarthusiensJerez } from "@/content/experiences/chevaux-carthusiens-jerez";
import { experience as vegaSiciliaGrandsMillesimes } from "@/content/experiences/vega-sicilia-grands-millesimes";
import { experience as montgolfiereFauconAlMarmoom } from "@/content/experiences/montgolfiere-faucon-al-marmoom";
import { experience as perlesSuwaidiRasAlKhaimah } from "@/content/experiences/perles-suwaidi-ras-al-khaimah";
import { experience as bivouacRubAlKhali } from "@/content/experiences/bivouac-rub-al-khali";
import { experience as baleinesBanderas } from "@/content/experiences/baleines-banderas";
import { experience as cenoteSecretYucatan } from "@/content/experiences/cenote-secret-yucatan";
import { experience as tableOaxacaCocinera } from "@/content/experiences/table-oaxaca-cocinera";
import { experience as epheseArcheologueHorsHeures } from "@/content/experiences/ephese-archeologue-hors-heures";
import { experience as goelettePriveeCoteLycienne } from "@/content/experiences/goelette-privee-cote-lycienne";
import { experience as hammamKilicAliPasaPrive } from "@/content/experiences/hammam-kilic-ali-pasa-prive";
import { experience as canoeAubeLacMoraine } from "@/content/experiences/canoe-aube-lac-moraine";
import { experience as chevauxSkokiBanff } from "@/content/experiences/chevaux-skoki-banff";
import { experience as icebergsBaleinesTerreNeuve } from "@/content/experiences/icebergs-baleines-terre-neuve";
import { experience as milongaPriveeSanTelmo } from "@/content/experiences/milonga-privee-san-telmo";
import { experience as universFrancisMallmann } from "@/content/experiences/univers-francis-mallmann";
import { experience as glacierUpsalaNavigation } from "@/content/experiences/glacier-upsala-navigation";

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
import { accommodation as amanzoe } from "@/content/accommodations/amanzoe";
import { accommodation as canavesOia } from "@/content/accommodations/canaves-oia";
import { accommodation as kalesmaMykonos } from "@/content/accommodations/kalesma-mykonos";
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
// Svart (src/content/accommodations/svart.tsx) reste volontairement hors
// registre tant que la date d'ouverture n'est pas connue.
import { accommodation as belmondReidsPalace } from "@/content/accommodations/belmond-reids-palace";
import { accommodation as casaVelhaDoPalheiro } from "@/content/accommodations/casa-velha-do-palheiro";
import { accommodation as savoyPalace } from "@/content/accommodations/savoy-palace";
import { accommodation as laBastideDeGordes } from "@/content/accommodations/la-bastide-de-gordes";
import { accommodation as lesSourcesDeCheverny } from "@/content/accommodations/les-sources-de-cheverny";
import { accommodation as grandHotelDuCapFerrat } from "@/content/accommodations/grand-hotel-du-cap-ferrat";
import { accommodation as amanVenice } from "@/content/accommodations/aman-venice";
import { accommodation as rosewoodCastiglionDelBosco } from "@/content/accommodations/rosewood-castiglion-del-bosco";
import { accommodation as lefayDolomiti } from "@/content/accommodations/lefay-dolomiti";
import { accommodation as vilaGuara } from "@/content/accommodations/vila-guara";
import { accommodation as alvearPalace } from "@/content/accommodations/alvear-palace";
import { accommodation as awasiMendoza } from "@/content/accommodations/awasi-mendoza";
import { accommodation as eoloPatagonia } from "@/content/accommodations/eolo-patagonia";
import { accommodation as belmondDasCataratas } from "@/content/accommodations/belmond-das-cataratas";
import { accommodation as fasanoSalvador } from "@/content/accommodations/fasano-salvador";
import { accommodation as sixSensesDouroValley } from "@/content/accommodations/six-senses-douro-valley";
import { accommodation as sublimeComporta } from "@/content/accommodations/sublime-comporta";
import { accommodation as olissippoLapaPalace } from "@/content/accommodations/olissippo-lapa-palace";
import { accommodation as sonevaJani } from "@/content/accommodations/soneva-jani";
import { accommodation as chevalBlancRandheli } from "@/content/accommodations/cheval-blanc-randheli";
import { accommodation as sixSensesLaamu } from "@/content/accommodations/six-senses-laamu";
import { accommodation as amangiri } from "@/content/accommodations/amangiri";
import { accommodation as postRanchInn } from "@/content/accommodations/post-ranch-inn";
import { accommodation as theMarkHotel } from "@/content/accommodations/the-mark-hotel";
import { accommodation as theAlpinaGstaad } from "@/content/accommodations/the-alpina-gstaad";
import { accommodation as hotel7132Vals } from "@/content/accommodations/hotel-7132-vals";
import { accommodation as castelloDelSoleAscona } from "@/content/accommodations/castello-del-sole-ascona";
import { accommodation as hotelSacherVienna } from "@/content/accommodations/hotel-sacher-vienna";
import { accommodation as rosewoodSchlossFuschl } from "@/content/accommodations/rosewood-schloss-fuschl";
import { accommodation as aurelioLech } from "@/content/accommodations/aurelio-lech";
import { accommodation as akelarre } from "@/content/accommodations/akelarre";
import { accommodation as fincaCortesin } from "@/content/accommodations/finca-cortesin";
import { accommodation as sonBunyola } from "@/content/accommodations/son-bunyola";
import { accommodation as alMaha } from "@/content/accommodations/al-maha";
import { accommodation as qasrAlSarab } from "@/content/accommodations/qasr-al-sarab";
import { accommodation as alBaitSharjah } from "@/content/accommodations/al-bait-sharjah";
import { accommodation as chableYucatan } from "@/content/accommodations/chable-yucatan";
import { accommodation as maromaBelmond } from "@/content/accommodations/maroma-belmond";
import { accommodation as oneOnlyMandarina } from "@/content/accommodations/one-only-mandarina";
import { accommodation as ajiaHotel } from "@/content/accommodations/ajia-hotel";
import { accommodation as museumHotelCappadoce } from "@/content/accommodations/museum-hotel-cappadoce";
import { accommodation as sixSensesKaplankaya } from "@/content/accommodations/six-senses-kaplankaya";
import { accommodation as fairmontChateauLakeLouise } from "@/content/accommodations/fairmont-chateau-lake-louise";
import { accommodation as clayoquotWildernessLodge } from "@/content/accommodations/clayoquot-wilderness-lodge";
import { accommodation as fogoIslandInn } from "@/content/accommodations/fogo-island-inn";

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
  argentine,
  autriche,
  bresil,
  canada,
  corse,
  emiratsArabesUnis,
  espagne,
  etatsUnis,
  france,
  grece,
  costaRica,
  egypte,
  indonesie,
  islande,
  jordanie,
  marrakech,
  maurice,
  namibie,
  norvege,
  oman,
  italie,
  madere,
  maldives,
  mexique,
  paris,
  polynesie,
  portugal,
  rioDeJaneiro,
  rome,
  seychelles,
  suisse,
  turquie,
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
  acropoleHorsHeures,
  ascensionMontBromo,
  atelierLesage,
  atelierSambaMangueira,
  aubeHadzabeLacEyasi,
  arlbergPeauDePhoque,
  atelierCorailBiologiste,
  atelierHorlogerValleeDeJoux,
  aubeBarqueOeschinensee,
  baieMontSaintMichel,
  baleinesBanderas,
  berninaExpressWagonPrive,
  bivouacRubAlKhali,
  cabernetCulteNapa,
  cenoteSecretYucatan,
  chevalPlageComporta,
  chevauxCarthusiensJerez,
  canoeAubeLacMoraine,
  chevauxSkokiBanff,
  corcovadoAubePaineiras,
  colonieManchotsBoulders,
  coucherSoleilGranit,
  croisierePriveeCyclades,
  cuisinePalaisBahia,
  decouverteIlesBateauSeychelles,
  degustationBlandys,
  delphesGuideArcheologue,
  coursCuisineBlueElephant,
  croisiereIlotBenitiers,
  dinerLadyLisbeth,
  echappeeSkeletonCoast,
  eclosionTortuesSeychelles,
  flyCampKopjesGrumeti,
  golfParadisMorne,
  dinerBancDeSableNoonu,
  epheseArcheologueHorsHeures,
  fadoChapelleAlfama,
  foretFanal,
  galerieBorghesePrive,
  glacierUpsalaNavigation,
  goelettePriveeCoteLycienne,
  gr20,
  grottesPontaDaPiedade,
  hammamDarElBacha,
  hammamKilicAliPasaPrive,
  icebergsBaleinesTerreNeuve,
  iguacuChutesAube,
  ilesCagarrasPecheur,
  ilesDaymaniyatSnorkeling,
  ilesWestmanEldfell,
  kayakPaddleThorsmork,
  khaoYaiHeowSuwat,
  lagonWeekuriSumba,
  lagunesLencoisAube,
  lipizzansHofreitschule,
  mercadoFunchal,
  metAvantOuverture,
  milongaPriveeSanTelmo,
  montgolfiereFauconAlMarmoom,
  muranoMaitreVerrier,
  pecheDhoniCoucherSoleil,
  perlesSuwaidiRasAlKhaimah,
  pistageCondorsBigSur,
  pistageJaguarsPantanal,
  plageSeixal,
  pompeiHorsHeures,
  saveiroBaieTousLesSaints,
  truffeBlancheAlba,
  txokoSanSebastian,
  universFrancisMallmann,
  vegaSiciliaGrandsMillesimes,
  wachauRieslingDurnstein,
  viaFerrataIvanoDibona,
  sablesSecretsRio,
  soireeBossaNovaIpanema,
  lagonMoorea,
  lavezzi,
  louvrePriveNocturne,
  marcheBushmenSan,
  marchePistageThornybush,
  montgolfiereNecropoleThebaine,
  navigationCanauxOkavango,
  nickTetautiare,
  nizwaBahlaJabreen,
  nonnaCuisineTrastevere,
  observationBaleinesIslande,
  observationEtoilesWadiRum,
  olduvaiPaleoanthropologue,
  parcNamibNaukluft,
  pecheMoorea,
  pecheSkreiLofoten,
  plongeeMerRougeAqaba,
  ponteTortuesVertes,
  refugeCuru,
  reinefjordMoskenstraumen,
  reserveNectandra,
  rungisChef,
  safariNocturneProjecteur,
  skiVoileSunnmore,
  siwaCampementDesert,
  sossusvleiDeadvlei,
  survolAtlasBiplan,
  tableOaxacaCocinera,
  tableSantorinVigneron,
  tirtaEmpulForetSinges,
  valleeRoisTombesFermees,
  viaAppiaVespa,
  vinCorse,
  wadiBaniKhalid,
  wadiRum4x4Campement,
  volHelicoptereMpumalanga,
  valleeBlancheMontBlanc,
  vinsClairsChampagne,
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
  ajiaHotel,
  akelarre,
  alBaitSharjah,
  alMaha,
  alvearPalace,
  amangiri,
  amanjena,
  amanVenice,
  amanzoe,
  amankila,
  amanpuri,
  anantaraAlJabalAlAkhdar,
  belmondCopacabanaPalace,
  bushmansKloof,
  aurelioLech,
  awasiMendoza,
  belmondDasCataratas,
  belmondReidsPalace,
  calaRossa,
  canavesOia,
  casaVelhaDoPalheiro,
  castelloDelSoleAscona,
  casadelmar,
  chableYucatan,
  clayoquotWildernessLodge,
  fairmontChateauLakeLouise,
  fogoIslandInn,
  chevalBlancParis,
  dahabiehPrivatiseeNil,
  darAhlam,
  dusitThaniBangkok,
  eagleIslandLodge,
  ellermanHouse,
  fasanoRio,
  fourSeasonsAmman,
  fourSeasonsJakarta,
  chevalBlancRandheli,
  eoloPatagonia,
  fasanoSalvador,
  fincaCortesin,
  fourSeasonsMahe,
  fourSeasonsPapagayo,
  fregateIslandPrivate,
  grumetiSerengetiRiverLodge,
  hasslerRoma,
  hoanibSkeletonCoastCamp,
  holmenLofoten,
  hotelDeRussie,
  hotelJokulsarlon,
  grandHotelDuCapFerrat,
  hotel7132Vals,
  hotelSacherVienna,
  hotelSantaTeresa,
  jacksCamp,
  jKPlaceRoma,
  kalesmaMykonos,
  juvetLandskapshotell,
  kempinskiIshtarDeadSea,
  labaMamaSimba,
  laBastideDeGordes,
  leBristol,
  lefayDolomiti,
  lesSourcesDeCheverny,
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
  royalMansour,
  royalPalmBeachcomber,
  sasekaTentedCamp,
  singitaSasakwaLodge,
  sixSensesYaoNoi,
  skalakot,
  sossusvleiDesertLodge,
  tawana,
  umiHotel,
  vingtDegresSud,
  zannierSonop,
  maromaBelmond,
  museumHotelCappadoce,
  oneOnlyMandarina,
  olissippoLapaPalace,
  postRanchInn,
  qasrAlSarab,
  rosewoodCastiglionDelBosco,
  rosewoodSchlossFuschl,
  savoyPalace,
  sixSensesDouroValley,
  sixSensesKaplankaya,
  sixSensesLaamu,
  sonBunyola,
  sonevaJani,
  stRegisBoraBora,
  sublimeComporta,
  theAlpinaGstaad,
  theBrando,
  theChediMuscat,
  theMarkHotel,
  vilaGuara,
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
