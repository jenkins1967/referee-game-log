import { Injectable } from '@angular/core';
import { RefereeGrade } from '../models/referee-grade';
import {Observable} from 'rxjs';
import { Misconduct } from '../models/misconduct';


export abstract class ReferenceDataService {
  abstract UssfRefereeGrades():Observable<Array<RefereeGrade>>;
  abstract Misconducts():Observable<Array<Misconduct>>;
}
