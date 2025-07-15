import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  public getAll() {
    const jsonProfiles = localStorage.getItem('profiles');
    return jsonProfiles ? JSON.parse(jsonProfiles) : [];
  }

  public create(profile: Profile) {
    profile.profileId = crypto.randomUUID();
    const profiles = this.getAll();
    profiles.push(profile);
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }
}
