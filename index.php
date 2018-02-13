<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="refresh" content="30">
    <meta http-equiv="Content-Type" content="text/html"; charset="utf-8" />
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Chrono</title>
    <script type="text/javascript" src="date_heure.js"></script>
    <script type="text/javascript" src="./bootstrap/js/bootstrap.min.js"></script>
</head>

<body>
<div class="content col-lg-12 col-md-12 col-sm-12 col-xs-12" >
    <div class="content-top col-lg-12 col-md-12 col-sm-12 col-xs-12" > 
        <span id="date_heure" style="font-size:25em;margin:1%;"></span>
    </div>
    <div class="content-bottom col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <span id="minuteur" style="font-size:22em;margin:1%;"></span>
    </div>
</div>
<script type="text/javascript">
    window.onload = date_heure('date_heure');
    window.onload = date_minuteur('minuteur');
</script>
</body>

</html>