USE HowKteam 
GO

SELECT *
INTO CloneGV
FROM dbo.GIAOVIEN 
WHERE 1 < 0


-- Insert into 
-- Copy dữ liệu vào 1 bảng đã tồn tại
INSERT INTO CloneGV
SELECT * FROM dbo.GIAOVIEN 

SELECT *
FROM dbo.GIAOVIEN 