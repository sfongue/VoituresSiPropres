import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAssignationDto {
  @ApiModelProperty()
  readonly id_assignation: string;
  
  @ApiModelProperty()
  readonly id_utilisateur: string;
  
  @ApiModelProperty()
  readonly id_portique: string;
  
  @ApiModelProperty()
  readonly id_type_evenement: string;
}


