import { UserLdap } from "./user-ldap";

export const LDAP_USERS: UserLdap[] = [
  {
    login: 'test.v1',
    nom: 'v1',
    prenom: 'Test',
    nomComplet: 'V1 Test',
    motDePasse: null,
    mail: 'test.v1@epsi.fr',
    role: 'ROLE_USER',
    dateEmbauche: '2020-01-01',
    employeNumero: 1234,
    employeNiveau: 120,
    publisherId: 1,
    active: true,
  },
  {
    login: 'test.v2',
    nom: 'v2',
    prenom: 'Test',
    nomComplet: 'V2 Test',
    motDePasse: null,
    mail: 'test.v2@epsi.fr',
    role: 'ROLE_USER',
    dateEmbauche: '2020-02-02',
    employeNumero: 2234,
    employeNiveau: 220,
    publisherId: 2,
    active: true,
  }
]