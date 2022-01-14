USE HowKteam 
GO

-- Left join
-- Bảng bên phải nhập vào bảng bên trái
-- Record nào bảng bên phải không có thì để null
-- Record nào bảng bên trái không có thì không điền vào
SELECT *
FROM dbo.GIAOVIEN AS GV LEFT JOIN dbo.BOMON AS BM
ON GV.MABM = BM.MABM



-- Right join
SELECT *
FROM dbo.GIAOVIEN AS GV RIGHT JOIN dbo.BOMON AS BM
ON GV.MABM = BM.MABM