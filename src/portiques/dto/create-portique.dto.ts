import { ApiModelProperty } from '@nestjs/swagger';

export class CreatePortiqueDto {
  @ApiModelProperty()
  readonly id_portique: string;
  
  @ApiModelProperty()
  readonly type_portique: string;
  
  @ApiModelProperty()
  readonly emplacement: string;
}
