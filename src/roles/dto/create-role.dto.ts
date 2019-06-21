import { ApiModelProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiModelProperty()
  readonly intitule: string;
  
  @ApiModelProperty()
  readonly created_at: string;
}