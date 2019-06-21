import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTypeEvenementDto {
  @ApiModelProperty()
  readonly id_type_evenement: string;
  
  @ApiModelProperty()
  readonly intitule: string;
  
  @ApiModelProperty()
  readonly created_at: string;
  
  @ApiModelProperty()
  readonly updated_at: string;
}