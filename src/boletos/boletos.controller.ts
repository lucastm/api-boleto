import { Controller, Get, Param } from '@nestjs/common';
import { BoletosService } from './boletos.service';
import { BoletoDto } from './dto/boleto.dto';

@Controller('boleto')
export class BoletosController {
  constructor(private readonly boletosService: BoletosService) {}

  @Get(':code')
  findOne(@Param('code') code: string) {
    const boleto = this.boletosService.findOne(code);
    const boletoDto = BoletoDto.fromBoleto(boleto);
    return boletoDto;
  }
}
