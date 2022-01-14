USE HowKteam 
GO

SELECT *
FROM dbo.GIAOVIEN AS GV, dbo.BOMON AS BM
WHERE GV.MABM = BM.MABM 


-- outer join
-- gom 2 bảng lại theo điều kiện / bên nào không có dữ liệu thì để NULL
SELECT *
FROM dbo.GIAOVIEN AS GV FULL OUTER JOIN dbo.BOMON AS BM
ON GV.MABM = BM.MABM 
