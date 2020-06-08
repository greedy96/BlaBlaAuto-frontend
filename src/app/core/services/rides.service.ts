import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Ride } from '../models/ride.model';

@Injectable({
  providedIn: 'root'
})
export class RidesService {
  constructor(private httpClient: HttpClient) {
  }

  getHistoricRides(firstResult = 0, maxResult = 5): Observable<Ride[]> {
    return this.httpClient.get<Ride[]>(environment.endpoints.apiPath + environment.endpoints.historicRidesPath, {
      params: new HttpParams().set('first_result', String(firstResult)).set('max_result', String(maxResult))
    });
  }

  getParticipantRides(firstResult = 0, maxResult = 5): Observable<Ride[]> {
    return this.httpClient.get<Ride[]>(environment.endpoints.apiPath + environment.endpoints.participantRidesPath, {
      params: new HttpParams().set('first_result', String(firstResult)).set('max_result', String(maxResult))
    });
  }

  searchRides(rideFrom, rideTo, startDate, firstResult = 0, maxResult = 10): Observable<Ride[]> {
    return this.httpClient.get<Ride[]>(environment.endpoints.apiPath + environment.endpoints.ridesPath, {
      params: new HttpParams().set('ride_from', rideFrom).set('ride_to', rideTo).set('start_date', startDate)
        .set('first_result', String(firstResult)).set('max_result', String(maxResult))
    });
  }

  getRideDetails(id): Observable<Ride> {
    return this.httpClient.get<Ride>(environment.endpoints.apiPath + environment.endpoints.ridesPath + '/' + id);
  }

  addNewRide(rideCredentials): Observable<Ride> {
    return this.httpClient.post<Ride>(environment.endpoints.apiPath + environment.endpoints.ridesPath, rideCredentials);
  }

  addaPassenger(rideId: number): Observable<Ride> {
    return this.httpClient.put<Ride>(environment.endpoints.apiPath + environment.endpoints.ridesPath + '/' + rideId + '/add', null);
  }
}
