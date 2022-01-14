INSERT INTO dbo.GiaoVien (MaGV, TenSV, NgaySinh)
VALUES ('1',
		N'Nguyễn Quang Ha',
		'20211208'
		) 



CREATE TABLE Hoso
(
  Ten NVARCHAR(10),
  SDT INT,
  TienLuong FLOAT,
  Diachi CHAR(20),
  Sex BIT
)
GO

INSERT INTO dbo.Hoso (Ten, SDT, TienLuong, Diachi, Sex)
VALUES (N'Quant',
		123456,
		1200.002,
		'Địachine',
		NULL
		)
INSERT INTO dbo.Hoso (Ten, SDT, TienLuong, Diachi, Sex)
VALUES (N'Quant',
		123456,
		1200.002,
		'Địachine',
		NULL
		)
INSERT INTO dbo.Hoso (Ten, SDT, TienLuong, Diachi, Sex)
VALUES (N'Quant',
		123456,
		1200.002,
		'Địachine',
		1
		)

INSERT INTO dbo.Hoso (Ten, SDT, TienLuong, Diachi, Sex)
VALUES (N'Quant',
		123456,
		1200.002,
		'Địachine',
		1
		)


DELETE dbo.Hoso WHERE SDT = 123456 AND Sex = 1
GO

SELECT *
FROM Hoso

UPDATE dbo.Hoso SET SDT = 9876, Sex = 1
WHERE TienLuong > 1000


CREATE TABLE KEYPRI
(
  ID INT NOT NULL PRIMARY KEY,
  Ten VARCHAR(20)
)
GO

INSERT KEYPRI (ID, Ten)

VALUES(
    0, N'An'
)

INSERT KEYPRI (ID, Ten)

VALUES(
    1, N'Binh'
)

INSERT KEYPRI (ID, Ten)

VALUES(
    2, N'Tam'
)

-- Có thể Add khóa chính sau khi tạo bảng

ALTER TABLE dbo.KEYPRI ADD PRIMARY KEY (Ten)


SELECT *
FROM KEYPRI

CREATE TABLE KEYPRI3
(
    ID INT NOT NULL,
	Ten NVARCHAR(20)

	PRIMARY KEY (ID)
)

INSERT dbo.KEYPRI3 (ID, Ten)
VALUES (
   0,
   N'Minh Minh'
)


CREATE TABLE KEYPRI5 
  (ID INT NOT NULL,
   Name NVARCHAR)

INSERT dbo.KEYPRI5 ( ID, Name )

VALUES (
    11,
	N'Nam'
)

ALTER TABLE dbo.KEYPRI5
ADD CONSTRAINT PK_KEYPRI5
PRIMARY KEY (ID)


