onePlusone = do
    print "1 + 1 = 2"
    print "Blue archive"
    

main = do
    putStrLn "Welcome to the programme. Please enter your name"
    onePlusone
    name <- getLine
    putStrLn("Hello " ++ name ++ ", hope you like Haskell.")