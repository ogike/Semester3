<?php
 
//hasonló mint js
$variable = 'alma';
$var = 12;
$var3 = true;

$vararray = ['almafa', 12, 23, true, false, ["sample text"]];

$egyetemek = [
    [
        'nev' => 'Eötvös Loránd Tudományegyetem',
        'allami' => true,
        'karok' => [
            [
                'nev' => 'IK',
                'hallgatok' => 3500
            ],
            [
                'nev' => 'TTK',
                'hallgatok' => 10000
            ],
            [
                'nev' => 'TáTK',
                'hallgatok' => 2500
            ]
        ]
    ],
    [
        'nev' => 'Budapesti Műszaki és Gazdaságtudományi Egyetem',
        'allami' => true,
        'karok' => [
            [
                'nev' => 'VIK',
                'hallgatok' => 3500
            ],
            [
                'nev' => 'GTK',
                'hallgatok' => 4000
            ]
        ]
    ],
    [
        'nev' => 'Budapesti Corvinus Egyetem',
        'allami' => false,
        'karok' => [
            [
                'nev' => 'Corvinus Kar 1',
                'hallgatok' => 4500
            ],
            [
                'nev' => 'Corvinus Kar 2',
                'hallgatok' => 3000
            ],
            [
                'nev' => 'Corvinus Kar 3',
                'hallgatok' => 7000
            ],
            [
                'nev' => 'Corvinus Kar 4',
                'hallgatok' => 1500
            ]
        ]
    ],
    [
        'nev' => 'Debreceni Egyetem',
        'allami' => true,
        'karok' => [
            [
                'nev' => 'Informatikai Kar',
                'hallgatok' => 1500
            ]
        ]
    ],
    [
        'nev' => 'Milton Friedman Egyetem',
        'allami' => false,
        'karok' => [
            [
                'nev' => 'Kar pénz++',
                'hallgatok' => 4000
            ]
        ]
    ]
];

//feladat: függvény ami visszaadja a hallgatók számát!
function sumOfStudents($uni){
    $sum = 0;
    //uni karok tömbjén átmegyünk, egyenként $kar lesz
    foreach($uni['karok'] as $kar){
        $sum += $kar['hallgatok'];
    }
    return $sum;
}

//hány állami?
$stateFunded = 0;
$corporate = 0;
foreach($egyetemek as $uni){
    if($uni['allami']){ //bool statement
        $stateFunded++;
    } else{
        $corporate++;
    }
}

$totalNumber = $stateFunded + $corporate;
$statePercent = floor( ($stateFunded/$totalNumber) * 100 );
$corpPercent  = floor( ($corporate/$totalNumber)   * 100 );

//NOTES ################################

//változó kiirasa
//echo $universities;

//objektumon belül minden valtozo kiirasa (nagyon ronda)
//var_dump($egyetemek);
//szebben: 
//echo '<pre>', var_dump($egyetemek), '</pre>';

//tömbhöz hozzáadás:
$tomb = [];
$tomb[] = 'első elem';
$tomb[] = 'második elem';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <th>Egyetem</th>
            <th>Állami fenntartás?</th>
            <th>Karok</th>
            <th>Hallgatók száma</th>
        </tr>
        <?php foreach($egyetemek as $uni): ?>
            <tr style="background-color: <?= $uni['allami'] ? 'orange' : 'pink'?>">
                <!-- Változó kiírása -->
                <td><?=$uni['nev']?></td> 

                <td>
                    <?php if($uni['allami']): ?>
                        Állami
                    <?php else: ?>
                        Magán
                    <?php endif ?>
                </td>

                <td>
                    <ul>
                        <?php foreach($uni['karok'] as $kar): ?>
                            <li><?=$kar['nev']?></li>
                        <?php endforeach ?>
                    </ul>
                </td>

                <td>
                    <?=sumOfStudents($uni)?>
                </td>
            </tr>
        <?php endforeach ?>
    </table>

    <div style="border-style: solid; padding: 0em;">
        <p style="width: <?=$statePercent?>%; background-color: orange; margin: 0em;">
            Állami egyetemek: <?=$stateFunded?> (<?=$statePercent?>%)
        </p>
        <p style="width: <?=$corpPercent?>%; background-color: pink; margin: 0em;">
            Magán egyetemek: <?=$corporate?> (<?=$corpPercent?>%)
        </p>
    </div>

    <p>

    </p>
</body>
</html>
