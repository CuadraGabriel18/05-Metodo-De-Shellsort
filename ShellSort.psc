Algoritmo ShellSort
	Definir lista, aux, inc, i, j, NUMERO_ELEMENTOS_LISTA Como Real
	Dimensionar lista(100)
	Escribir 'Ingrese el número de elementos: '
	Leer NUMERO_ELEMENTOS_LISTA
	Para i<-1 Hasta NUMERO_ELEMENTOS_LISTA Hacer
		Escribir 'Ingrese el valor para el elemento ', i, ': '
		Leer lista[i]
	FinPara
	inc <- trunc(NUMERO_ELEMENTOS_LISTA/2)
	Mientras inc>0 Hacer
		Para i<-inc+1 Hasta NUMERO_ELEMENTOS_LISTA Con Paso 1 Hacer
			j <- i-inc
			Mientras j>0 Hacer
				Si lista[j]>lista[j+inc] Entonces
					aux <- lista[j]
					lista[j] <- lista[j+inc]
					lista[j+inc]<-aux
					j <- j-inc
				SiNo
					j <- 0
				FinSi
			FinMientras
		FinPara
		inc <- trunc(inc/2)
	FinMientras
	Escribir 'Lista ordenada:'
	Para i<-1 Hasta NUMERO_ELEMENTOS_LISTA Hacer
		Escribir lista[i]
	FinPara
FinAlgoritmo
