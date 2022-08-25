import { Alumnos } from "./alumnos";
import { Cursos } from "./cursos";

export interface Inscripciones{
    id: number,
    alumno: Alumnos,
    curso: Cursos
}