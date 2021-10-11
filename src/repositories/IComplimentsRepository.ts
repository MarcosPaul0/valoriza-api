import { Compliment } from "../entities/Compliment";

export interface ICreateComplimentDTO {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

export interface IComplimentsRepository {
  create({ tag_id, user_sender, user_receiver, message }: ICreateComplimentDTO): Promise<Compliment>;
  listComplimentsSended(id: string): Promise<Compliment[]>;
  listComplimentsReceived(id: string): Promise<Compliment[]>;
}