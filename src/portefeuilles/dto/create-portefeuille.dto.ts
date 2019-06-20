import { ApiModelProperty } from '@nestjs/swagger';

export class CreatePortefeuilleDto {
  @ApiModelProperty()
  readonly id_portefeuille: string;
  
  @ApiModelProperty()
  readonly numero_carte: string;
  
  @ApiModelProperty()
  readonly code_pin: number;
  
  @ApiModelProperty()
  readonly solde: number;
}

