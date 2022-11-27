import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class createDto {

  @IsString()
  @ApiProperty({
    description: "Origem da viagem",
    example: "São Paulo",
  })
  origem: string;

  @IsString()
  @ApiProperty({
    description: "Destino da viagem",
    example: "Minas Gerais",
  })
  destino: string;

  @IsString()
  @ApiProperty({
    description: "Data da viagem",
    example: "27/11/2022",
  })
  data: string;

  @IsString()
  @ApiProperty({
    description: "Horário da viagem",
    example: "13:00",
  })
  hora: string;

  @IsString()
  @ApiProperty({
    description: "Nome do cliente",
    example: "jose da silva",
  })
  nome: string;

  @IsString()
  @ApiProperty({
    description: "Nome da empresa",
    example: "ags-transportes",
  })
  empresa: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: "telefone para contato",
    example: 99999999,
  })
  contato: number;

  @IsString()
  @ApiProperty({
    description: "Email para contato",
    example: "exemplo@exemplo.com",
  })
  email: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: "Quantidade de passageiros",
    example: 5,
  })
  passageiros: number;

  @IsString()
  @ApiProperty({
    description: "Modelo do veiculo",
    example: "Hilux",
  })
  veiculo: string;

  @IsString()
  @ApiProperty({
    description: "Mais detalhes informados pelo cliente",
    example: "um dos passageiros tem mobilidade reduzida",
  })
  informacoes: string;
}
