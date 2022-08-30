import { Alumnos } from "./alumnos";
import { Cursos } from "./cursos";

export interface Inscripciones{
    id: string,
    alumno: Alumnos,
    curso: Cursos
}