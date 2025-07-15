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

  public getProfiles(): Observable<Profile[]> {
    return this.profiles$.asObservable();
  }

  public create(profile: Profile) {
    profile.profileId = crypto.randomUUID();
    this.saveProfiles([...this.profiles$.value, profile]);
  }

  public delete(id: string) {
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

  private saveProfiles(profiles: Profile[]) {
    localStorage.setItem('profiles', JSON.stringify(profiles));
    this.profiles$.next(profiles);
  }
}
