import streamlit as st
import pandas as pd
import plotly.express as px

tabela = pd.read_csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6kSZFFAFOmYCWc4oo2MgRmykG67g9W39rGsDJHnPdUCjXrVXRtN9Opt1JiViyXbBpmGqn3ACT3Noj/pub?gid=0&single=true&output=csv", sep=",")

linhasTabela = len(tabela) - 1
ultimoCicloTempo = tabela.loc[linhasTabela, ["tempoSensor1", "tempoSensor2", "tempoSensor3", "tempoSensor4"]]
ultimoCicloVelocidade = tabela.loc[linhasTabela, ["velocidadeSensor1", "velocidadeSensor2", "velocidadeSensor3", "velocidadeSensor4"]]
ultimoCicloAceleração = tabela.loc[linhasTabela, ["aceleracaoSensor1", "aceleracaoSensor2", "aceleracaoSensor3", "aceleracaoSensor4"]]



fig1 = px.line(x=ultimoCicloTempo, y=ultimoCicloVelocidade)
st.write("Gráfico de velocidade x tempo")
st.plotly_chart(fig1)


fig2 = px.line(x=ultimoCicloTempo, y=ultimoCicloAceleração)
st.write("Gráfico de velocidade x tempo")
st.plotly_chart(fig2)