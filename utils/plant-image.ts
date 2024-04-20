import raboDeTatu from "@/public/plants/aloe-aristata-rabo-de-tatu.jpeg";
import bonsaiAmora from "@/public/plants/bonsai-amora.jpeg";
import bonsaiJabuticaba from "@/public/plants/bonsai-jabuticaba.jpeg";
import bonsaiRoma from "@/public/plants/bonsai-roma.jpeg";
import cactoGymnocalyciumVariegata1 from "@/public/plants/cacto-gymnocalycium-variegata.jpeg";
import cactoGymnocalyciumVariegata2 from "@/public/plants/cacto-gymnocalycium-variegata-2.jpeg";
import espadinha from "@/public/plants/espadinha.jpeg";
import ficusLyrata from "@/public/plants/ficus-lyrata.jpeg";
import hera from "@/public/plants/hera.jpeg";
import hibiscoDobrado from "@/public/plants/hibisco-dobrado.jpeg";
import jiboia from "@/public/plants/jiboia.jpeg";
import miniAnturio from "@/public/plants/mini-anturio-pote-09.jpeg";
import miniCactos1 from "@/public/plants/mini-cactos.jpeg";
import miniPacova from "@/public/plants/mini-pacova.jpeg";
import miniZamioculca from "@/public/plants/mini-zamioculca.jpeg";
import miniZamioculcaBlack from "@/public/plants/mini-zamioculca-black.jpeg";
import oraProNobis from "@/public/plants/ora-pro-nobis.jpeg";
import palmeiraChamaedorea from "@/public/plants/palmeira-chamaedorea.jpeg";
import palmeiraMadagascar from "@/public/plants/palmeira-de-madagascar.jpeg";
import palmeiraRafis from "@/public/plants/palmeira-rafis.jpeg";
import pataDeElefante from "@/public/plants/pata-de-elefante.jpeg";
import raboMacaco from "@/public/plants/rabo-de-macaco.jpeg";


const plantImage: any = {
  "Aloe Aristata - Rabo de Tatu": raboDeTatu,
  "Bonsai Amora": bonsaiAmora,
  "Bonsai Jabuticaba": bonsaiJabuticaba,
  "Bonsai Romã": bonsaiRoma,
  "Cacto Gymnocalycium Variegata 1": cactoGymnocalyciumVariegata1,
  "Cacto Gymnocalycium Variegata 2": cactoGymnocalyciumVariegata2,
  "Espadinha": espadinha,
  "Ficus Lyrata": ficusLyrata,
  "Hera": hera,
  "Hibisco Dobrado": hibiscoDobrado,
  "Jibóia": jiboia,
  "Mini Antúrio - Pote 09": miniAnturio,
  "Mini Cactos 1": miniCactos1,
  "Mini Pacová": miniPacova,
  "Mini Zamioculca": miniZamioculca,
  "Mini Zamioculca Black": miniZamioculcaBlack,
  "Ora-pro-nóbis": oraProNobis,
  "Palmeira Chamaedorea": palmeiraChamaedorea,
  "Palmeira de Madagascar": palmeiraMadagascar,
  "Palmeira Ráfis": palmeiraRafis,
  "Pata de Elefante": pataDeElefante,
  "Rabo de Macaco": raboMacaco,
};

export function PlantImage(plant: string) {
  return plantImage[plant] || "/";
}
