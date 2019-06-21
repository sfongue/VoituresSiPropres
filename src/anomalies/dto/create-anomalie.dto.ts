import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAnomalieDto {
  @ApiModelProperty()
  readonly id_anomalie: string;
  
  @ApiModelProperty()
  readonly intitule: string;
  
  @ApiModelProperty()
  readonly id_portique: string;
  
  @ApiModelProperty()
  readonly id_status: string;

  @ApiModelProperty()
  readonly created_at: string;
}
