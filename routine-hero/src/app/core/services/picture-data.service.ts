import { Injectable } from '@angular/core';
import { Picture } from '../interfaces/picture.interface';

@Injectable({
  providedIn: 'root',
})
export class PictureDataService {
  public getProfilePictures(): Picture[] {
    return [
      { label: 'Chevalier', path: '/profile_icons/knight.png' },
      { label: 'Cyclope', path: '/profile_icons/cyclops_5064863.png' },
      { label: 'Princesse', path: '/profile_icons/princess_5101538.png' },
      { label: 'Dragon', path: '/profile_icons/dragon_3410567.png' },
      { label: 'Elfe', path: '/profile_icons/elf_9307751.png' },
      { label: 'Fée', path: '/profile_icons/fairy_6756063.png' },
      { label: 'Viking', path: '/profile_icons/viking_5101673.png' },
      { label: 'Yéti', path: '/profile_icons/yeti_1149401.png' },
    ];
  }

  public getTaskPictures(): Picture[] {
    return [
      { label: 'Chambre', path: '/task_icons/bedroom_1069454.png' },
      {
        label: 'Couvert',
        path: '/task_icons/dish_1069461.png',
      },
      {
        label: 'Vaisselles',
        path: '/task_icons/dishes_1907179.png',
      },
      {
        label: 'Lave-vaiselle',
        path: '/task_icons/dishwasher_7935337.png',
      },
      {
        label: 'Linges étendus',
        path: '/task_icons/drying_7212534.png',
      },
      {
        label: 'Linges pliés',
        path: '/task_icons/laundry-basket_2542434.png',
      },
      {
        label: 'Douche',
        path: '/task_icons/shower_2858233.png',
      },
      {
        label: 'Éponge',
        path: '/task_icons/sponge_2542427.png',
      },
      {
        label: 'Brosse à dent',
        path: '/task_icons/toothbrush_1028807.png',
      },
      {
        label: 'Aspirateur',
        path: '/task_icons/vaccum-cleaner_7935295.png',
      },
    ];
  }
}
