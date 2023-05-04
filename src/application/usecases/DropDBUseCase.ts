import { Injectable } from "@nestjs/common";
import { IClientesSegmentos } from "../repositories/IClientesSegmentos";

@Injectable()
export class DropDBUseCase {
    constructor(private repository: IClientesSegmentos) {}

    async execute() {
        await this.repository.dropDB();
    }
}