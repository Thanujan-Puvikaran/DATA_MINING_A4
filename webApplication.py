import streamlit as st
from streamlit_folium import folium_static
import folium
from folium import plugins
import query

st.set_page_config(page_title="Trouve ta bibliothèque",
                    page_icon="📚",
                    layout="wide",
                   )

st.title('Trouve ta bibliothèque')
st.markdown("Cette application vous permet de trouver les **5** bibliothèques se trouvant les plus proches de l'école selectionnée  \n- _by Dylan RAKOTOARIVELO, Thanujan PUVIKARAN, Yanis RABIA_")

def createMap(coord,zoom_start): 
    m = folium.Map(location=coord, zoom_start=zoom_start)
    minimap = plugins.MiniMap(toggle_display=True)
    m.add_child(minimap)
    plugins.ScrollZoomToggler().add_to(m)
    plugins.Fullscreen(position='topright').add_to(m)
    return m


def getCoordsBiblio():
    return query.getCordonneesBiblio()

coordsBiblio = getCoordsBiblio()

selectors = st.container()

with selectors:
    region_col, departement_col, ville_col, niveau_col, ecole_col= st.columns(5)

    regionslst = query.getRegions()
    regionslst.insert(0,"")
    region = region_col.selectbox("Région",regionslst)

    if region != "" :
        deplst = query.getDepartements(region)
        deplst.insert(0,"")
        dep = departement_col.selectbox("Département",deplst)
    try:
        if dep != "" :
            villeslst = query.getVille(dep)
            villeslst.insert(0,"")
            ville = ville_col.selectbox("Ville",villeslst)
    except BaseException:
        pass

    try:
        if ville != "" :
            niveauxlst = query.getNatureEcole(ville)
            niveauxlst.insert(0,"")
            niveau = niveau_col.selectbox("Niveaux",niveauxlst)
    except BaseException:
        pass

    try:
        if len(niveau) != 0:
            ecoleslst = query.getEcoles(ville,niveau)
            ecoleslst.insert(0,"")
            ecole = ecole_col.selectbox("Ecole",ecoleslst)
            coordsEcole = query.getCoordonneesEcole(ecole,ville)
    except BaseException:
        pass
    
    # try:
    #     hasValidate = button_col.button("Valider")
    # except BaseException:
    #     pass


res_col, map_col = st.columns((1,4))

with res_col:
    st.subheader("Résultats")

    try:
        if niveau != "":
            nomEcole = ecole.replace("|",'-')
            st.markdown(f"**{nomEcole}**")
            bibsInfo = query.getBiblios(coordsBiblio,coordsEcole)

            for bib in bibsInfo:
                bib_cont = res_col.container()
                bib_cont.markdown(f"**{bib[0]}**  \n _{bib[1]}, {bib[2]}_  \n {bib[5]:.2f} km")

    except BaseException:
        pass

map_cont = map_col.container()

with map_cont:
    st.subheader("Carte")

    try:
        if len(bibsInfo) !=0:
            map = createMap(coordsEcole,14)
            folium.Marker(
                 coordsEcole, popup=nomEcole, tooltip=nomEcole,
                 icon=folium.Icon(color='blue', icon='graduation-cap', prefix='fa')).add_to(map)
            for bib in bibsInfo:
                folium.Marker(
                 [bib[3],bib[4]], popup=bib[0], tooltip=bib[0],
                 icon=folium.Icon(color='orange', icon='book', prefix='fa')).add_to(map)
            folium_static(map,height=700,width=1400 )
    except BaseException:
        pass


