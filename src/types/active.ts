import { Instrument } from "./instruments";

export type Active = Omit<Instrument, "return">;