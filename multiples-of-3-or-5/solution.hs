module MultiplesOf3And5 where

solution :: Integer -> Integer
solution number = sum [n | n <- [1..number - 1], n `mod` 3 == 0 || n `mod` 5 == 0]

main :: IO ()
main =
    do
        putStrLn . show $ solution 16
        putStrLn (show (solution 16 ))