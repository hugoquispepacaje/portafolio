import { ModalContent } from "./ModalContent";
export interface CarruselItem {
  id:number;
  titulo:string;
  url:string;
  modalContent?:ModalContent
}