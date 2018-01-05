function date_heure(id)
{
        date = new Date;
        annee = date.getFullYear();
        moi = date.getMonth();
        mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
        j = date.getDate();
        jour = date.getDay();
        jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        resultat = h+':'+m+':'+s;
        document.getElementById(id).innerHTML = resultat;
        setTimeout('date_heure("'+id+'");','1000');
        return true;
}

function date_minuteur(id)
{
        date = new Date;
        annee = date.getFullYear();
        moi = date.getMonth();
        mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
        j = date.getDate();
        jour = date.getDay();
        jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        // resultat = h+':'+m+':'+s;
        zero = '0'+0;
        minuteur = 60 - s;
        if (minuteur == 60){
                minuteur ='GO ' +'00'+' GO';
        }else if((minuteur<10) && (minuteur>=1)) {
              minuteur = '0' + minuteur;
        }
        else if((minuteur>50) && (minuteur<=60)) {
                minuteur = 'GO';
        }
        else if ((minuteur == '00') || (minuteur == 0) || (minuteur == zero)) {
             minuteur = 'GO ' + minuteur + ' GO';
        }
        else if((minuteur>30)&&(minuteur<=50))
        {
                minuteur = 'NEXT';
        }
        document.getElementById(id).innerHTML = minuteur;
        setTimeout('date_minuteur("' + id + '");', '1000');
        return true;
}