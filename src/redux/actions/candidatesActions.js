import * as actionTypes from "./actionTypes";
import axios from "axios";

export function getCandidatesSuccess(candidates) {
  return { type: actionTypes.GET_CANDIDATES_SUCCESS, payload: candidates };
}

export function addCandidate(candidate) {
  return { type: actionTypes.CANDIDATE_ADD, payload: candidate };
}

export function getCandidates() {
  return function (dispatch) {
    let url = "http://localhost:8080/api/candidates/getall";

    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCandidatesSuccess(result)));
  };
}

export function registerCandidate(candidate) {
  return function (dispatch) {
    return axios
      .put("http://localhost:8080/api/candidates/register", candidate)
      .then((response) => response.json())
      .then((result) => dispatch(addCandidate(result)));
  };
}
