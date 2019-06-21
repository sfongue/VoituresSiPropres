import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUtilisateurDto {
  @ApiModelProperty()
  readonly id_utilisateur: string;

  @ApiModelProperty()
  readonly nom: string;

  @ApiModelProperty()
  readonly prenom: string;

  @ApiModelProperty()
  readonly telephone: string;

  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly mot_de_passe: string;

  @ApiModelProperty()
  readonly id_role: string;

  @ApiModelProperty()
  readonly id_portefeuille: string;
}