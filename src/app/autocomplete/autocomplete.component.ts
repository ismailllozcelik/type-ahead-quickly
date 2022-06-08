import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent {
  @Input() searchAreaBgColor = '#5B4B8A';
  searching = '';
  customers = [
    {
      name: 'Ann Liebmann',
      phoneNumber: '+27-61-453-5444',
      mail: 'ann.lieb@',
      policyNo: '0013983887 | 0013983887',
    },
    {
      name: 'Ann Summer',
      phoneNumber: '+27-61-453-5444',
      mail: 'ann.summer@',
      policyNo: '0013983887 | 0013983887',
    },
    {
      name: 'Anabelle Samuel',
      phoneNumber: '+27-61-453-5444',
      mail: 'anna.samuel@',
      policyNo: '0013983887 | 0013983887',
    },
    {
      name: 'Bella Liebmann',
      phoneNumber: '+27-61-453-5444',
      mail: 'bella.lieb@',
      policyNo: '0013983887 | 0013983887',
    },
    {
      name: 'Belais Summer',
      phoneNumber: '+27-61-453-5444',
      mail: 'belais.summer@',
      policyNo: '0013983887 | 0013983887',
    },
  ];
  constructor() {}
}
