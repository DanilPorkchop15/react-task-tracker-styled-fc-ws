import {action, computed, makeObservable, observable} from "mobx";
import {clone} from "ramda";

export class Model<TYPE extends object> {
  public readonly initialState: TYPE;

  @observable
  private _state: TYPE;

  constructor(initialValues: TYPE) {
    makeObservable(this);
    this._state = clone(initialValues);
    this.initialState = clone(initialValues);
  }

  @computed
  public get state(): TYPE {
    return this._state;
  }

  @action.bound
  public set(value: TYPE) {
    this._state = clone(value);
  }
}