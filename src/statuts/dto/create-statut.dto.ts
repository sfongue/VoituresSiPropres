import { ApiModelProperty } from '@nestjs/swagger';

export class CreateStatutDto {
  @ApiModelProperty()
  readonly id_statut: string;

  @ApiModelProperty()
  readonly intitule: string;
}
