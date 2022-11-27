import { ApiProperty } from '@nestjs/swagger';

export class createDto {

  @ApiProperty({
    description: "Origem da viagem",
    example: "São Paulo",
  })
  origem: string;

  @ApiProperty({
    description: "Destino da viagem",
    example: "Minas Gerais",
  })
  destino: string;

  @ApiProperty({
    description: "Data da viagem",
    example: 1,
  })
  data: number;

  @ApiProperty({
    description: "Horário da viagem",
    example: 13,
  })
  hora: number;

  @ApiProperty({
    description: "Nome do cliente",
    example: "jose da silva",
  })
  nome: string;

  @ApiProperty({
    description: "Nome da empresa",
    example: "ags-transportes",
  })
  empresa: string;

  @ApiProperty({
    description: "telefone para contato",
    example: 1,
  })
  contato: number;

  @ApiProperty({
    description: "Email para contato",
    example: "exemplo@exemplo.com",
  })
  email: string;

  @ApiProperty({
    description: "Quantidade de passageiros",
    example: 5,
  })
  passageiros: number;

  @ApiProperty({
    description: "Modelo do veiculo",
    example: "Hilux",
  })
  veiculo: string;

  @ApiProperty({
    description: "Mais detalhes informados pelo cliente",
    example: "um dos passageiros tem mobilidade reduzida",
  })
  informacoes: string;
}
