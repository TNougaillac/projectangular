import { UserLdap } from "./user-ldap";

export const LDAP_USERS: UserLdap[] = [
  {
    id: 1,
    login: 'c.make34',
    nom: 'Makélélé',
    prenom: 'Claude',
    nomComplet: 'Claude Makélélé',
    motDePasse: null,
    mail: 'c.make34@epsi.fr',
    role: 'ROLE_USER',
    dateEmbauche: '2020-01-01',
    employeNumero: 1234,
    employeNiveau: 120,
    publisherId: 1,
    active: true,
  },
  {
    id: 2,
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
