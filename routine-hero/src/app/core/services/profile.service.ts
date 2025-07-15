import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profiles$: BehaviorSubject<Profile[]>;

  constructor() {
    this.profiles$ = new BehaviorSubject<Profile[]>(
      this.getProfilesFromStorage()
    );
  }

  public all(): Observable<Profile[]> {
    return this.profiles$.asObservable();
  }

  public create(profile: Profile): void {
    profile.profileId = crypto.randomUUID();
    this.saveProfiles([...this.profiles$.value, profile]);
  }

  public update(profile: Profile): void {
    const profiles = this.profiles$.value;

    const index = profiles.findIndex(
      (profile) => profile.profileId === profile.profileId
    );

    if (index !== -1) {
      const updatedProfiles = [...profiles];
      updatedProfiles[index] = profile;
      this.saveProfiles(updatedProfiles);
    } else {
      console.warn('Profil à mettre à jour non trouvé :', profile.profileId);
    }
  }

  public delete(id: string): void {
    const updatedProfiles = this.profiles$.value.filter(
      (profile) => profile.profileId != id
    );
    this.saveProfiles(updatedProfiles);
  }

  // Storage

  private getProfilesFromStorage() {
    const jsonProfiles = localStorage.getItem('profiles');
    return jsonProfiles ? JSON.parse(jsonProfiles) : [];
  }

  private saveProfiles(profiles: Profile[]): void {
    localStorage.setItem('profiles', JSON.stringify(profiles));
    this.profiles$.next(profiles);
  }
}
