<!-- /*
    Nama File : KRS_11S2032.php
    NIM       : 11S20032
    Nama Mahasiswa : Yosua Putra Wisesa Haloho
*/ -->

<?php
    $KODE_MK_SKS = array(
        array("11S3109", "Pengembangan Aplikasi Berbasis Web", 4),
        array("11S3101", "Analisis dan Perancangan Perangkat Lunak", 3),
        array("10S3109", "Kecerdasan Buatan", 3),
        array("11S3116", "Teori Bahasa Formal dan Automata", 3),
        array("11S3112", "Pengujian dan Penjaminan Mutu Perangkat Lunak", 3),
        array("11S3105", "Kriptografi dan Keamanan Informasi", 3)
    )
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yosua KRS</title>
</head>
<body>
    <h3>Kartu Rencana Studi (KRS)</h3>
    <hr style="width: 650px; margin-left: 0;">
    
    <div style="display: flex; font-weight: bold;">
        <span style="width: 200px;">NIM</span> 
        <strong>11S20032</strong>
        <br>
    </div>
    <br>
    <div style="display: flex; font-weight: bold;">
        <span style="width: 200px;">Nama</span> 
        <span>Yosua Putra Wisesa Haloho</span> 
    </div>

    <br><br>

    <div style="display: flex; font-weight: bold;">
        <span style="width: 200px">Kode Mata Kuliah</span>
        <span style="width: 400px;">Nama Mata Kuliah</span>
        <span>SKS</span>
    </div>
    <hr style="width: 650px; margin-left: 0;">


    <?php 
        function layoutYgDiulang($kodeMK, $namaMK, $bykSKS) {
            echo(
                "<div style='display: flex; margin-bottom: 5px'>
                    <span style='width: 200px'>" . $kodeMK . "</span>
                    <span style='width: 400px;'>" . $namaMK ."</span>
                    <span>". $bykSKS ."</span>
                </div>"
            );
        }

        $jumlahSKS = 0;
        for ($x = 0; $x < count($KODE_MK_SKS); $x++) {
            layoutYgDiulang($KODE_MK_SKS[$x][0], $KODE_MK_SKS[$x][1], $KODE_MK_SKS[$x][2]);
            $jumlahSKS += $KODE_MK_SKS[$x][2];
        };

        echo(
            "<hr style='width: 650px; margin-left: 0;'>
            <div style='display: flex;'>
                <span style='width: 200px'>TOTAL</span>
                <span style='width: 400px;'></span>
                <span>". $jumlahSKS ."</span>
            </div>"
        );
    ?>
</body>
</html>