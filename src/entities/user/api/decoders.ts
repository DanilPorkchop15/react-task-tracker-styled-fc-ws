import Decoder, {array, field, number, string, succeed} from "jsonous";
import {User} from "../interfaces";

export const userDecoder: Decoder<User> = succeed({})
  .assign("id", field("id", number))
  .assign("name", field("name", string))
  .assign("username", field("username", string))
  .assign("email", field("email", string))
  .assign("address", field("address", succeed({})
    .assign("street", field("street", string))
    .assign("suite", field("suite", string))
    .assign("city", field("city", string))
    .assign("zipcode", field("zipcode", string))
    .assign("geo", field("geo", succeed({})
      .assign("lng", field("lng", string))
      .assign("lat", field("lat", string))
    ))))
  .assign("phone", field("phone", string))
  .assign("website", field("website", string))
  .assign("company", field("company", succeed({})
    .assign("name", field("name", string))
    .assign("catchPhrase", field("catchPhrase", string))
    .assign("bs", field("bs", string))
  ));

export const usersDecoder: Decoder<User[]> = array(userDecoder);
