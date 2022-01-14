USE HowKteam 
GO


-- inner join kiểu cũ --> có thể không còn được hỗ trợ nữa
-- mọi join đều cần điều kiện
SELECT * 
FROM dbo.GIAOVIEN AS GV, dbo.BOMON AS BM
WHERE BM.MABM = GV.MABM 


-- inner join kiểu mới
SELECT * 
FROM dbo.GIAOVIEN AS GV INNER JOIN dbo.BOMON AS BM
ON BM.MABM = GV.MABM 

-- có thể viết tắt inner join thhanhf join
-- nhưng bắt buộc join phải có điều kiện ON ( trước đó là WHERE )
-- Join chỉ kết hợp được 2 bảng với nhau --> hơi phế
SELECT *
FROM dbo.GIAOVIEN AS GV JOIN dbo.BOMON
ON BOMON.MABM = GV.MABM