export type szobaAllapotTipus = "Egyéni tanulás" | "Csoportmunka" | "Számítógépes terem";
export interface szobaTipus{
    nev: string,
    id: number,
    szobafajta: szobaAllapotTipus,
    emelet: number,
    ferohely: number,
    foglalt_helyek: number
}
export const SZOBALISTA: szobaTipus[]=[
    {
        nev: "Csendes sarok",
        id: 1,
        szobafajta: "Egyéni tanulás",
        emelet: 1,
        ferohely: 12,
        foglalt_helyek: 7 
    },
    {
        nev: "Közös ötletelő",
        id: 2,
        szobafajta: "Csoportmunka",
        emelet: 2,
        ferohely: 20,
        foglalt_helyek: 11 
    },
    {
        nev: "Digitális műhely",
        id: 3,
        szobafajta: "Számítógépes terem",
        emelet: 3,
        ferohely: 16,
        foglalt_helyek: 9 
    }
]